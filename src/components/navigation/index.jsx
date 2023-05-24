import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { ClearRounded, Menu } from '@mui/icons-material';
import {NavigationDrawer, InnerDrawer} from './index.styles'
import { Link } from 'react-router-dom';
import {Button} from "@mui/material"
//import button as customButton
import CustomButton from '../Button';
import Login from '../modal/login';
import Register from '../modal/register';
import useModalToggler from '../../hooks/useModalToggler';
import useSetModalContent from '../../hooks/useSetModalContent';
const Navigation = ({name, venueManager, logout}) => {
  //hooks
  const {modalOn} = useModalToggler()
  const {setModal} = useSetModalContent()

  //nav state
    const [openstatus, setOpenStatus] = useState(false);
    //toggler...
    const change = (content) => {
      if(content === ""){setOpenStatus(false); return}
      setModal(content)
      modalOn()
      setOpenStatus(false)
    }
    let content = (<>
      <Button onClick={()=>{change(<Login/>)}}  sx={{color:"white", fontWeight:"300"}} variant="text">Login</Button>
      <Button onClick={()=>{change(<Register/>)}}  sx={{color:"white", fontWeight:"300"}} variant="text">Register</Button>
      </>)
    
    if(name){
      content = (
        <>
        <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant="text"><Link style={{ textDecoration:"none", color:"inherit"}} to={"/profile/" + name}>Profile</Link></Button>
        <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant="text"><Link style={{ textDecoration:"none", color:"inherit"}} to={"/profile/" + name + "/bookings"}>Bookings</Link></Button>
        {venueManager ?
        <>
        <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant="text"><Link style={{ textDecoration:"none", color:"inherit"}} to={"/profile/"+ name + "/venues"}>Venues</Link></Button>
        <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant="text"><Link style={{ textDecoration:"none", color:"inherit"}} to="/admin">AdminPanel</Link></Button>
        </>
        : null}
        <CustomButton variant="contained" color="error" text="Logout" event={()=>{logout();change("")}}/>
        </>
      )
    }
  return (
    <>
    <Box width="20%">
    <Menu className='iconButton' fontSize='large' sx={{color:"white", padding:"1rem"}} onClick={() => setOpenStatus(true)}/>
    </Box>
    <NavigationDrawer anchor='left' open={openstatus} onClose={()=>{setOpenStatus(false)}}>
    <InnerDrawer>
      <ClearRounded onClick={()=>{setOpenStatus(false)}} className='iconButton' sx={{color:"white", margin:"0 0 0 auto", padding:"1rem"}} fontSize='large'/>
      <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant='text'><Link style={{ textDecoration:"none", color:"inherit"}} to="/">Home</Link></Button>
      {content}
      </InnerDrawer>
    </NavigationDrawer>
    </>
  )
}

export default Navigation