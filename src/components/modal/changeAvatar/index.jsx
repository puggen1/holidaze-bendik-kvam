import Button from "../../Button"
import DefaultInput from "../../input/defaultInput"
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import avatarSchema from "../../../utils/schemas/avatarSchema"
import { Typography, Box } from "@mui/material"
import Avatar from "../../avatar"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import useModalToggler from "../../../hooks/useModalToggler"
import useHandleSnackbar from "../../../hooks/useHandleSnackbar"
const ChangeAvatar = ({oldAvatar, username}) => {
const Navigate = useNavigate()
const {modalOff} = useModalToggler()
const {handleBar} = useHandleSnackbar()
  const {changeAvatar, updateUser} = useContext(UserContext)
    const [currentAvatar, setCurrentAvatar] = useState(oldAvatar)
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const {
        handleSubmit,
        setValue,
        register,
        formState: { errors },
      } = useForm({ resolver: yupResolver(avatarSchema) });

      const changer = async (data) => {
        if(data.url) {
            //precausion
          setCurrentAvatar(data.url)
          setValue("url", "")
          const response = await changeAvatar(currentAvatar)
          if(response.success){
            updateUser({...response.content});
            modalOff()
            Navigate(0)
            handleBar("Avatar changed successfully", "success")
            setIsError(false)
          }
          else{
            setMessage(response.message)
            setIsError(true)
          }
        }
      };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <form onChange={(e)=>{setCurrentAvatar(e.target.value)}} style={{display:"grid", gap:"1rem"}} onSubmit={handleSubmit(changer)}>
        <Typography textAlign="center" variant='h4' component="p">Change avatar</Typography>
        <Avatar type="big" username={username} src={currentAvatar}/>
        <Box width="100%" margin="0 auto">
        <DefaultInput variant="outlined" color={errors.url ? "error" : "secondary"} placeholder={oldAvatar ? oldAvatar : "Paste Avatar url here"} type="url"  manager={{...register("url")}}/>
        <Typography variant="body1" minHeight="2rem" color="error">{errors.url?.message}</Typography>
        </Box>
        <Box width="60%" >
        <Typography variant="body1" minHeight="2rem" color="error">{isError ? message : ""}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
        <Button color="error" type="button" variant="contained" text="Cancel"/>
        <Button type="submit" color="secondary" variant="contained" text="Change" event={handleSubmit(changer)}/>
        </Box>
        </form>
    </div>  )
}

export default ChangeAvatar