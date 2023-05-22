import React from 'react'
import Avatar from '../../avatar'
import { Box, Typography } from '@mui/material'
import { InnerProfileInfo } from './index.styles'
const ProfileInfo = ({stats, name, img}) => {
  return (
    <InnerProfileInfo>
        <Avatar type='big' username={name} src={img}/>
        <Typography variant="h5" component="h1" margin="1rem 0">{name}</Typography>
        <Box display="flex" gap="3rem" margin="1rem 0" >
        <Typography variant="body1" component="h2">Manages {stats.venues} places</Typography>
        <Typography variant="body1" component="h2"> Booked {stats.bookings} places</Typography>
        </Box>
    </InnerProfileInfo>
  )
}

export default ProfileInfo