import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router'
const FetchError = () => {
    const navigate = useNavigate()
  return (
   <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="2rem"  marginTop="3rem">

    <Typography variant="h6"textAlign="center" component="h1">Sorry! - something went wrong</Typography>
    <Box>
    <Typography variant="body1"textAlign="center" component="p">There might be a problem with the Connection to the server</Typography>
    <Typography variant="body1"textAlign="center" component="p">Please try again later</Typography>
    </Box>
    <Box display="flex" gap="2rem" alignItems="center">
    <Button variant="contained" color="secondary" type='button' text="Go back" event={()=>{navigate(-1)}}/>
    <Typography variant="body1" component="p">or</Typography>
    <Button variant="contained" type='button' color="secondary" text="Home" event={()=>{navigate("/")}}/>
    </Box>
   </Box>
  )
}

export default FetchError