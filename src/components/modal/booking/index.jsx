import {useContext, useState} from 'react'
import {ModalContext} from '../../../context/modalContext'
import {UserContext} from '../../../context/userContext'
import { BookingContext } from '../../../context/bookingContext'
import { Typography } from '@mui/material'
import calculateDuration from '../../../utils/calculateDuration'
import Button from '../../Button'
import useSendData from '../../../hooks/useSendData'
import { baseUrl } from '../../../utils/constants'
 
const Booking = () => {
const {setInnerContent, setModalStatus} = useContext(ModalContext)
const {user} = useContext(UserContext)
const {venueName, venueId, bookingTime, guests, price, booker} = useContext(BookingContext)
const {sender} = useSendData()
const duration =  calculateDuration(bookingTime[0], bookingTime[1])
const start = bookingTime[0].format("DD/MM/YYYY")
const end = bookingTime[1].format("DD/MM/YYYY")
const book = async () => {
    let test = await booker(user.accessToken)
    console.log(test)
    // give apropriate error message or success message
    // if success, close modal promt to go to booking
    //if errror show error message
    //hook for checking if auth is expired, prompt to login again
}
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", margin:"1rem auto"}}>
        <Typography variant="h4" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">Want to book {venueName}?</Typography>
        <Typography variant="h5" component="h5" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">from {start} to {end}</Typography>
        <Typography variant="h5" component="h5" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">cost for {duration} nights: {duration * price},- kr</Typography>
        <Button event={() => setModalStatus(false)} text="Cancel" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
        <Button event={book} text="Book" color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>

    </div>
  )
}

export default Booking