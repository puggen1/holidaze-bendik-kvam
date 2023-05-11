import {useContext, useState} from 'react'
import DefaultInput from '../../input/defaultInput'
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {ModalContext} from '../../../context/modalContext'
import {UserContext} from '../../../context/userContext'
import Register from '../register'
import { useForm } from 'react-hook-form'
const Login = () => {
const {setInnerContent, setModalStatus} = useContext(ModalContext)
const {login} = useContext(UserContext)

const { register, handleSubmit, setValue} = useForm();
 /*needs to add a hook for this*/
 const handleLogin =async (data) => {
    const response = await login({email:data.email, password:data.password})
    console.log(response)
    if(response.success){
        //here show alert and close modal
        setValue("email", "")
        setValue("password", "")
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
        <DefaultInput manager={{...register("email")}} variant="outlined" color="secondary" text="Email" placeholder="Email" type="email"/>
        <DefaultInput manager={{...register("password")}} variant="outlined" color="secondary" text="Password" placeholder="Password" type="password"/>
        </Box>
        <Box>
        <Button event={()=>{setModalStatus(false)}} color="error" variant="contained" text="Cancel"/>
        <MuiButton type='text' onClick={()=>{setInnerContent(<Register/>)}}>Register</MuiButton>
        <Button event={handleSubmit(handleLogin)} color="secondary" variant="contained" text="Login"/>
        </Box>
    </div>
  )
}

export default Login