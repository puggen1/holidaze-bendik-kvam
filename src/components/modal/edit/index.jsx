
import { Typography, Box } from '@mui/material'
import Button from "../../Button/index"
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
    const editVenue =async () => {
    const result = await sender(venueInfo, baseUrl + "/venues/" + venueInfo.id, "put", auth)
    console.log(result)
    if(result.id){
      modalOff()
      handleBar(<><p>Venue edited</p></>,"success")
      navigate(`/venue/${result.id}`)
    }
    else{
      modalOff()
      handleBar(<p>something went wrong</p>, "error" )
    }
    
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">update {venueInfo.name}?</Typography>
       
        <Box sx={{display:"flex", gap:"2rem", marginTop:"auto"}}>
        <Button event={()=>{modalOff()}} color="error" variant="contained" text="Cancel"/>
        <Button event={()=>{editVenue()}} color="secondary" variant="contained" text="Create"/>
        </Box>
    </div>  )
}

export default Edit