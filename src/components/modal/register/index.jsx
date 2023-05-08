import {useContext, useState} from 'react'
import DefaultInput from '../../input/defaultInput'
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {ModalContext} from '../../../context/modalContext'
import {UserContext} from '../../../context/userContext'
import IconSwitch from '../../iconSwitch'
 
const Register = () => {
const {setInnerContent} = useContext(ModalContext)
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [avatar, setAvatar] = useState("")
const {register} = useContext(UserContext)

const changeUsername = (e) => {
    setUsername(e.target.value)
}
const changeEmail = (e) => {
    setEmail(e.target.value)
}
const changePassword = (e) => {
    setPassword(e.target.value)
}
const changeAvatar = (e) => {
    setAvatar(e.target.value)
}
const [admin, setAdmin] = useState(false)
const handleRegister =async () => {
    const response = await register({username, email, password, avatar})
    if(response.success){
        //here show alert and close modal
        setUsername("")
        setEmail("")
        setPassword("")
        setAvatar("")
        setInnerContent("login")
        //login at one when registered?

    }
    else{
        console.log(response)
        //show error message here
    }
}
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">Register</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"1rem auto"}}>
        <DefaultInput value={username} event={changeUsername} variant="outlined" color="secondary" text="Username*" placeholder="Username" type="text"/>
        <DefaultInput  value={email} event={changeEmail} variant="outlined" color="secondary" text="Email*" placeholder="Email" type="email"/>
        <DefaultInput value={password} event={changePassword} variant="outlined" color="secondary" text="Password*" placeholder="Password" type="password"/>
        <DefaultInput valye={avatar} event={changeAvatar} variant="outlined" color="secondary" text="Avatar Url" placeholder="Avatar url" type="text"/>
        <Box sx={{display:"grid", alignItems:"center", gridTemplateColumns:"1fr auto", width:"40%"}}>
        <IconSwitch event={()=>{setAdmin(!admin)}} checked={admin} outlined={false}/>
        <Typography variant="body1" component="p">Venue Manager</Typography>

        </Box>
        
        </Box>
        <Box>
        <Button color="error" variant="contained" text="Cancel"/>
        <MuiButton type='text' onClick={()=>{setInnerContent("login")}}>Login</MuiButton>
        <Button event={handleRegister} color="secondary" variant="contained" text="Register"/>
        </Box>
    </div>
  )
}

export default Register