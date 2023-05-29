
import { Typography, Box } from '@mui/material'
import Button from "../../Button/index"
import useSendData from '../../../hooks/useSendData';
import { baseUrl } from '../../../utils/constants';
import useGetUserInfo from '../../../hooks/useGetUserInfo';
import useHandleSnackbar from '../../../hooks/useHandleSnackbar';
import { useNavigate } from 'react-router-dom';
import useGetVenueData from '../../../hooks/useGetVenueData';
import useModalToggler from '../../../hooks/useModalToggler';
import { useState } from 'react';
const Create = () => {
  //getting venue data from context/hook
  const venueInfo = useGetVenueData()
  //getting auth from context/hook
  const {modalOff} = useModalToggler()
  const auth = useGetUserInfo("accessToken")
    //due to state being slow, venueInfo is an combined object of all the diffrent states.....
    //send data, and give alert based on response
const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
  const {sender} = useSendData()
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")
  const createVenue =async () => {
    if(!auth){
       handleBar("you need to be logged in to create a venue", "error" )
      modalOff()
      return
    }
    const result = await sender(venueInfo, baseUrl + "/venues", "POST",auth)
    if(result.id){
      modalOff()
      navigate(`/venue/${result.id}`)
      handleBar("Venue added","success")

    }
    else{
    setMessage(result.message)
    setIsError(true)
    }
    
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", height:"100%",gap:"1rem",  margin:"0rem auto"}}>
        <Typography textAlign="center" variant='h4' color="primary" component="p">Add {venueInfo.name}?</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"0 auto"}}>
        <Typography textAlign="center" variant='h6' color="primary" component="p">price: {venueInfo.price},-</Typography>
        <Typography textAlign="center" variant='h6' color="primary" component="p">max guests: {venueInfo.maxGuests}</Typography>
        </Box>
        <Box minHeight="2rem">
          <Typography textAlign="center" variant='h6' color="error" component="p">{isError ? message : ""}</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"2rem", marginTop:"auto"}}>
        <Button event={()=>{modalOff()}} color="error" variant="contained" text="Cancel"/>
        <Button event={()=>{createVenue()}} color="secondary" variant="contained" text="Create"/>
        </Box>
    </div>  )
}

export default Create