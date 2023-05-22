import Button from "../../Button"
import DefaultInput from "../../input/defaultInput"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import avatarSchema from "../../../utils/schemas/avatarSchema"
import { Typography } from "@mui/material"
import Avatar from "../../avatar"
import { useState } from "react"
import useSendData from "../../../hooks/useSendData"
import useGetUserInfo from "../../../hooks/useGetUserInfo"
import { baseUrl } from "../../../utils/constants"
const ChangeAvatar = ({oldAvatar, username}) => {
    const {sender} = useSendData()
    const [currentAvatar, setCurrentAvatar] = useState(oldAvatar)
    const auth = useGetUserInfo("accessToken")
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
          const dataToSend = {
            avatar: currentAvatar,
          }
            const response = await sender(dataToSend, baseUrl + "/profiles/" + username + "/media", "PUT", auth)
            console.log(response)
            if(response.avatar === currentAvatar) {
                console.log("success")
            }
            else {
                console.log("failed")
            }
        }
        console.log(data.url)
      };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <form onChange={(e)=>{setCurrentAvatar(e.target.value)}} onSubmit={handleSubmit(changer)}>
        <Typography textAlign="center" variant='h4' component="p">Change avatar</Typography>
        <Avatar type="big" username={username} src={currentAvatar}/>
        <DefaultInput variant="outlined" color={errors.url ? "error" : "secondary"} placeholder={oldAvatar ? oldAvatar : "Paste Avatar url here"} type="url"  manager={{...register("url")}}/>
        <Typography variant="body1" color="error">{errors.url?.message}</Typography>
        <Button color="error" variant="contained" text="Cancel"/>
        <Button color="secondary" variant="contained" text="Change" event={handleSubmit(changer)}/>
        </form>
    </div>  )
}

export default ChangeAvatar