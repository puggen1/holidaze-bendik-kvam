import React from 'react'
import Avatar from '../../avatar'
import { Box, Typography } from '@mui/material'
import { InnerProfileInfo, OuterAvatar } from './index.styles'
import { Edit } from '@mui/icons-material'
import useModalToggler from '../../../hooks/useModalToggler'
import ChangeAvatar from '../../modal/changeAvatar'
import useSetModalContent from '../../../hooks/useSetModalContent'
const ProfileInfo = ({stats, name, img, own}) => {
  const {modalOn} = useModalToggler()
  const {setModal} = useSetModalContent()
  return (
    <InnerProfileInfo>
        <OuterAvatar>
        {own && <Box className="edit" onClick={()=>{modalOn(); setModal(<ChangeAvatar oldAvatar={img} username={name}/>)}}><Edit/></Box>}
        <Avatar type='big' username={name} src={img}/>
        </OuterAvatar>
        <Typography variant="h5" component="h1" margin="1rem 0">{name}</Typography>
        <Box display="flex" gap="3rem" margin="1rem 0" >
        <Typography variant="body1" component="h2">Manages {stats.venues} places</Typography>
        <Typography variant="body1" component="h2"> Booked {stats.bookings} places</Typography>
        </Box>
    </InnerProfileInfo>
  )
}

export default ProfileInfo