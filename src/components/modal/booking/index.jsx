import {useContext} from 'react'
import {UserContext} from '../../../context/userContext'
import { BookingContext } from '../../../context/bookingContext'
import { Box, Typography } from '@mui/material'
import calculateDuration from '../../../utils/calculateDuration'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import useModalToggler from '../../../hooks/useModalToggler'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
const Booking = ({type="new"}) => {
const navigate = useNavigate()
const {handleBar} = useHandleSnackbar()
const {user} = useContext(UserContext)
const {modalOff} = useModalToggler()
const {venueName, bookingTime, price, booker} = useContext(BookingContext)
const duration =  calculateDuration(bookingTime[0], bookingTime[1])
const start = bookingTime[0].format("DD/MM/YYYY")
const end = bookingTime[1].format("DD/MM/YYYY")
const book = async () => {
    let test = await booker(user.accessToken, type)
    if(test.id){
      modalOff()
      type === "new" ? navigate("/booking/" + test.id): navigate(0);
      type === "new" ? handleBar("Booking successful", "success") : handleBar("Booking updated", "success")
    }
    else{
      modalOff()
      handleBar("Something went wrong", "error")
    }

    // give apropriate error message or success message
    // if success, close modal promt to go to booking
    //if errror show error message
    //hook for checking if auth is expired, prompt to login again
}
const message = type === "new" ?  "want to book " + venueName : "want to update your booking for " + venueName + "?"
  return (
    <div style={{display:"flex", gap:"1rem", flexDirection:"column", alignItems:"center", height:"100%", width:"80%", minHeight:"30vh", margin:"0 auto"}}>
        <Typography variant="h4" textAlign="center" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">{message}</Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="h5" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">from {start} to {end}</Typography>
        <Typography variant="h5" component="h5" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">cost for {duration} nights: {duration * price},- kr</Typography>
        </Box>
        <Box display="flex" width="80%" justifyContent="space-evenly">
        <Button event={() => modalOff()} text="Cancel" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
        <Button event={book} text={type === "new" ? "Book" : "Update"} color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
        </Box>
    </div>
  )
}

export default Booking