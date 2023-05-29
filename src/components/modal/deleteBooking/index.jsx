import { Typography, Box } from "@mui/material"
import Button from "../../Button"
import useModalToggler from "../../../hooks/useModalToggler"
import useSendData from "../../../hooks/useSendData"
import { baseUrl } from "../../../utils/constants"
import useGetUserInfo from "../../../hooks/useGetUserInfo"
import useHandleSnackbar from "../../../hooks/useHandleSnackbar"
import { useNavigate } from "react-router-dom"
const DeleteBooking = ({bookingId}) => {
    const auth = useGetUserInfo("accessToken")
    const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
    const {modalOff} = useModalToggler()
    const {sender} = useSendData()
    const cancelBooking = async ()=>{
        const response = await sender(false, baseUrl + "/bookings/" + bookingId, "DELETE", auth)
        if(response.ok){
            modalOff()
            navigate("/")
            handleBar("Booking cancelled", "success")

        }
        else{
            handleBar("Something went wrong", "error")
        }

    }
  return (
    <div style={{display:"flex", flexDirection:"column", width:"80%",alignItems:"center", height:"100%", minHeight:"25vh", justifyContent:"space-between",margin:"1rem auto"}}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="0.5rem">
    <Typography variant="h4" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">Cancel Booking at?</Typography>
    <Typography component="p" variant="body1" color="primary">This cannot be undone!</Typography>
    </Box>
    <Box display="flex" width="80%" justifyContent="space-evenly">
    <Button event={() => modalOff()} text="No take me back!" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    <Button event={cancelBooking} text="Cancel Booking" color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    </Box>
</div>  
  )
}

export default DeleteBooking