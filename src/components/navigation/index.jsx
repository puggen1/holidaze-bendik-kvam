import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Menu } from '@mui/icons-material';
import {NavigationDrawer} from './index.styles'
const Navigation = () => {
    const [openstatus, setOpenStatus] = useState(false);
  return (
    <Box width="20%">
    <Menu fontSize='large' sx={{color:"white", padding:"1rem" }} onClick={() => setOpenStatus(true)}/>
    <NavigationDrawer anchor='left' open={openstatus} onClose={()=>{setOpenStatus(false)}} onOpen={()=>{setOpenStatus(true)}}>
    <h2>Hello</h2>
    </NavigationDrawer>
    </Box>
  )
}

export default Navigation