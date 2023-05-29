import React from 'react'
import Button from '../Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import useModalToggler from '../../hooks/useModalToggler'
import useSetModalContent from '../../hooks/useSetModalContent'
import Delete from '../modal/deleteVenue'
const VenueAdminOptions = ({venueId}) => {
    const {modalOn} = useModalToggler()
    const {setModal} = useSetModalContent()
    const navigate = useNavigate()
    const location = useLocation()

  return (<Box sx={{display:"flex", gap:"1rem", bottom:"10%", height:"100%", justifyContent:"center", margin:"auto 0 0 0"}}>
    <Button text="Delete" color="error" variant="contained" event={()=>{modalOn(); setModal(<Delete venueId={venueId}/>)}}/>
    <Button text="Manage this venue" color="primary" variant="contained" event={()=>{navigate("/admin/venues/" + venueId)}}/>
    <Button text="Edit" color="secondary" variant="contained" event={()=>{navigate(location.pathname + "/edit")}}/>
    </Box>
  )
}

export default VenueAdminOptions