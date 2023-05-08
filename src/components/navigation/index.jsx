import { Box } from '@mui/material'
import React from 'react'
import { useState, useContext } from 'react';
import { ClearRounded, Menu } from '@mui/icons-material';
import {NavigationDrawer, InnerDrawer} from './index.styles'
import { Link } from 'react-router-dom';
import {Button} from "@mui/material"
import { ModalContext } from '../../context/modalContext';
const Navigation = () => {
    const [openstatus, setOpenStatus] = useState(false);
    const { modalStatus, setModalStatus, innerContent, setInnerContent } = useContext(ModalContext)
    const change = (content) => {
  
      if(content === ""){setOpenStatus(false); return}
      setInnerContent(content)
      setModalStatus(!modalStatus)
      setOpenStatus(false)
    }
  return (
    <>
    <Box width="20%">
    <Menu className='iconButton' fontSize='large' sx={{color:"white", padding:"1rem"}} onClick={() => setOpenStatus(true)}/>
    </Box>
    <NavigationDrawer anchor='left' open={openstatus} onClose={()=>{setOpenStatus(false)}} onOpen={()=>{setOpenStatus(true)}}>
    <InnerDrawer>
      <ClearRounded onClick={()=>{setOpenStatus(false)}} className='iconButton' sx={{color:"white", margin:"0 0 0 auto", padding:"1rem"}} fontSize='large'/>
      <Button onClick={()=>{change("")}} sx={{color:"white", fontWeight:"300"}} variant='text'><Link style={{ textDecoration:"none", color:"inherit"}} to="/">Home</Link></Button>
      <Button onClick={()=>{change("login")}}  sx={{color:"white", fontWeight:"300"}} variant="text">Login</Button>
      <Button onClick={()=>{change("register")}}  sx={{color:"white", fontWeight:"300"}} variant="text">Register</Button>
      </InnerDrawer>
    </NavigationDrawer>
    </>
  )
}

export default Navigation