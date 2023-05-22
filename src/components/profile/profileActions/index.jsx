import { Box } from '@mui/material'
import React from 'react'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
const ProfileActions = () => {
    const navigate = useNavigate()
  return (
    <Box gridArea="profileActions" margin="1rem auto" display="flex" gap="2rem" position="fixed" top="600px" width="400px" justifyContent="center">
            <Button variant="contained"  color="secondary" text="Admin Panel" event={()=>{navigate("/admin")}}/>
           <Button variant="contained"  color="secondary" text="Add Venue" event={()=>{navigate("/venue/add")}}/>
           
    </Box>
  )
}

export default ProfileActions