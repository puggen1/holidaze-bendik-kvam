
import { Typography, Box } from '@mui/material'
import Button from "../../Button/index"
import { useState } from 'react';
import useSendData from '../../../hooks/useSendData';
import { baseUrl } from '../../../utils/constants';
import useGetUserInfo from '../../../hooks/useGetUserInfo';
import useHandleSnackbar from '../../../hooks/useHandleSnackbar';
import { useNavigate} from 'react-router-dom';
import useGetVenueData from '../../../hooks/useGetVenueData';
import useModalToggler from '../../../hooks/useModalToggler';
const Edit = () => {
    const venueInfo  = useGetVenueData()
    const auth = useGetUserInfo("accessToken")
    //due to state being slow, venueInfo is an combined object of all the diffrent states.....
    const {modalOff} = useModalToggler()
    //send data, and give alert based on response
    const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
    const {sender} = useSendData()
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const editVenue =async () => {
    const result = await sender(venueInfo, baseUrl + "/venues/" + venueInfo.id, "put", auth)
    if(result.id){
      setIsError(false)
      modalOff()
      navigate(`/venue/${result.id}`)
      handleBar("Venue edited","success")
  
    }
    else{
      setIsError(true)
      setMessage(result.message)
    }
    
  }

  return (
    <Box style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", minHeight:"25vh", margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">update</Typography>
        <Typography textAlign="center" variant='h4' component="p">{venueInfo.name}?</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"0 auto"}}>
        <Typography textAlign="center" variant='h6' component="p">{isError ? message : ""}</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"2rem", marginTop:"auto"}}>
        <Button event={()=>{modalOff()}} color="error" variant="contained" text="Cancel"/>
        <Button event={()=>{editVenue()}} color="secondary" variant="contained" text="Update"/>
        </Box>
    </Box>  )
}

export default Edit