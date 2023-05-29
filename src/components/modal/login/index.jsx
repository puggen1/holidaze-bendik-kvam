import {useContext, useState} from 'react'
import DefaultInput from '../../input/defaultInput'
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {UserContext} from '../../../context/userContext'
import Register from '../register'
import { useForm } from 'react-hook-form'
import useModalToggler from '../../../hooks/useModalToggler'
import useSetModalContent from '../../../hooks/useSetModalContent'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
import { loginSchema } from '../../../utils/schemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
const Login = () => {
const {login} = useContext(UserContext)
const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) })
const {modalOff} = useModalToggler()
const {setModal} = useSetModalContent()
const {handleBar} = useHandleSnackbar()
const [message, setMessage] = useState("")
const [isError, setIsError] = useState(false)
 /*needs to add a hook for this*/
 const handleLogin =async (data) => {
    const response = await login({email:data.email, password:data.password})
    console.log(data)
    if(response.success){
        //here show alert and close modal
        setValue("email", "")
        setValue("password", "")
        handleBar("Logged in", "success")
        modalOff()
        setIsError(false)
    }
    else{
      setIsError(true)
      setMessage(response.message)
    }
 }
  return ( 
    <form onChange={()=>{setIsError(false)}} onSubmit={handleSubmit(handleLogin)} style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">Login</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"1rem auto"}}>
          <Box display="flex" flexDirection="column">
        <DefaultInput manager={{...register("email")}} variant="outlined" color={errors.email ? "error" : "secondary"} text="Email" placeholder="Email" type="email"/>
        <Typography minHeight="2rem" textAlign="center" variant='body1' color={errors.email ? "error": "primary"} component="p">{errors.email?.message}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
        <DefaultInput manager={{...register("password")}} variant="outlined" color={errors.password ? "error" : "secondary"} text="Password" placeholder="Password" type="password"/>
        <Typography  minHeight="2rem" textAlign="center" variant='body1' color={errors.password ? "error": "primary"} component="p">{errors.password?.message}</Typography>
        </Box>
        <Typography minHeight="2rem" textAlign="center" variant='body1' color={isError ? "error": "primary"} component="p">{isError ? message : ""}</Typography>
        </Box>
        <Box>
        <Button event={()=>{modalOff()}} color="error" variant="contained" text="Cancel"/>
        <MuiButton variant='text' onClick={()=>{setModal(<Register/>)}}>Register</MuiButton>
        <Button type="submit" event={handleSubmit(handleLogin)} color="secondary" variant="contained" text="Login"/>
        </Box>
    </form>
  )
}

export default Login