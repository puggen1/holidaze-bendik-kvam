import {useContext, useState} from 'react'
import DefaultInput from '../../input/defaultInput'
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {UserContext} from '../../../context/userContext'
import IconSwitch from '../../iconSwitch'
import Login from '../login'
import useModalToggler from '../../../hooks/useModalToggler'
import useSetModalContent from '../../../hooks/useSetModalContent'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
import registerSchema from '../../../utils/schemas/register'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
const Register = () => {
    const {handleBar} = useHandleSnackbar()
    const {register:registerUser} = useContext(UserContext)
    const {setModal} = useSetModalContent()
    const {modalOff} = useModalToggler()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) })

    const [admin, setAdmin] = useState(false)
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const handleRegister =async (data) => {
    const response = await registerUser({name: data.name, email:data.email, password:data.password, avatar:data.avatar, venueManager:admin})
   
    if(response.success){
        handleBar("Registered", "success")
        //here show alert and close modal
        setValue("name", "")
        setValue("email", "")
        setValue("password", "")
        setValue("avatar", "")
        setModal(<Login/>)
        //login at one when registered?

    }
    else{
        setIsError(true)
        setMessage(response.message)
        //show error message here
    }
}
  return (
    <form onChange={()=>{setIsError(false)}} onSubmit={handleSubmit(handleRegister)} style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", height:"100%", margin:"1rem 0"}}>
        <Box display="flex" flexDirection="column">
        <Typography textAlign="center" variant='h4' component="p">Register</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"1rem auto"}}>
        </Box>
        <Box display="flex" flexDirection="column">
        <DefaultInput manager={{...register("name")}} variant="outlined" color={errors.name ? "error":"secondary"} text="Username*" placeholder="Username" type="text"/>
        <Typography variant="body1" minHeight="2rem" component="p" color="error">{errors.name?.message}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
        <DefaultInput  manager={{...register("email")}} variant="outlined" color={errors.email ? "error":"secondary"} text="Email*" placeholder="Email" type="email"/>
        <Typography variant="body1" minHeight="2rem" component="p" color="error">{errors.email?.message}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">

        <DefaultInput manager={{...register("password")}} variant="outlined" color={errors.password ? "error":"secondary"} text="Password*" placeholder="Password" type="password"/>
        <Typography variant="body1" minHeight="2rem" component="p" color="error">{errors.password?.message}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
        <DefaultInput manager={{...register("avatar")}} variant="outlined" color={errors.avatar ? "error":"secondary"} text="Avatar Url" placeholder="Avatar url" type="text"/>
        </Box>
        <Box sx={{display:"grid", alignItems:"center", gridTemplateColumns:"1fr auto"}}>
        <IconSwitch event={()=>{setAdmin(!admin)}} checked={admin} outlined={false}/>
        <Typography variant="body1" component="p">Venue Manager</Typography>
        </Box>
        <Typography variant="body1" minHeight="2rem" component="p" color="error">{isError ? message : ""}</Typography>
        </Box>
        <Box>
        <Button type='button' event={()=>{modalOff()}} color="error" variant="contained" text="Cancel"/>
        <MuiButton variant='text' onClick={()=>{setModal(<Login/>)}}>Login</MuiButton>
        <Button  type="submit" event={handleSubmit(handleRegister)} color="secondary" variant="contained" text="Register"/>
        </Box>
    </form>
  )
}

export default Register