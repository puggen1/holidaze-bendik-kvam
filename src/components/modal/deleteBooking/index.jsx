import { Typography } from "@mui/material"
import Button from "../../Button"
import useModalToggler from "../../../hooks/useModalToggler"
import useSendData from "../../../hooks/useSendData"
import { baseUrl } from "../../../utils/constants"
import useGetUserInfo from "../../../hooks/useGetUserInfo"
const DeleteBooking = ({bookingId}) => {
    const auth = useGetUserInfo("accessToken")
    const {modalOff} = useModalToggler()
    const {sender} = useSendData()
    const cancelBooking = async ()=>{
        const response = sender({}, baseUrl + "/booking/" + bookingId, "DELETE", auth)
        console.log(response)
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", margin:"1rem auto"}}>
    <Typography variant="h4" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">Cancel Booking at?</Typography>
    <Typography component="p" variant="body1" color="primary">This cannot be undone!</Typography>
    <Button event={() => modalOff()} text="Cancel" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    <Button event={()=>{console.log("deleting........" + bookingId)}} text={type === "new" ? "Book" : "Update"} color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>

</div>
  )
}

export default DeleteBooking