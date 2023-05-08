import {useContext, useState} from 'react'
import DefaultInput from '../../input/defaultInput'
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {ModalContext} from '../../../context/modalContext'
import {UserContext} from '../../../context/userContext'
const Login = () => {
const {setInnerContent, setModalStatus} = useContext(ModalContext)
const {login} = useContext(UserContext)
const changeEmail = (e) => {
    setEmail(e.target.value)
}
const changePassword = (e) => {
    setPassword(e.target.value)
}
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
 /*needs to add a hook for this*/
 const handleLogin =async () => {
    const response = await login({email, password})
    if(response.success){
        //here show alert and close modal
        setEmail("")
        setPassword("")
        setModalStatus(false)
    }
    else{
        //show error message here
    }
 }
  return ( 
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">Login</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"1rem auto"}}>
        <DefaultInput value={email} event={changeEmail} variant="outlined" color="secondary" text="Email" placeholder="Email" type="email"/>
        <DefaultInput value={password} event={changePassword} variant="outlined" color="secondary" text="Password" placeholder="Password" type="password"/>
        </Box>
        <Box>
        <Button color="error" variant="contained" text="Cancel"/>
        <MuiButton type='text' onClick={()=>{setInnerContent("register")}}>Register</MuiButton>
        <Button event={handleLogin} color="secondary" variant="contained" text="Login"/>
        </Box>
    </div>
  )
}

export default Login