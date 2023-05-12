import Calendar from "../calendar";
import {useState, useRef, useContext} from 'react'
import GuestInput from "../input/guestInput";
import CustomButton from "../Button";
import { Box, Typography, Button } from "@mui/material";
import { Guests, OuterBooking, LowerBooking } from "./index.styles";
import useGetBookedDays from "../../hooks/useGetBookedDays";
import { BookingContext } from "../../context/bookingContext";
import { ModalContext } from "../../context/modalContext";
import BookingModal from "../modal/booking";
const Booking = ({bookedDates, max}) => {
  const {bookingTime, setBookingTime, guests, setGuests, venueId} = useContext(BookingContext)
  const {setModalStatus, setInnerContent} = useContext(ModalContext)
    const ref = useRef(null)
    const {allBookedDates} =  useGetBookedDays(bookedDates, guests, max)
    const confirmation = () => {
      if(bookingTime.length === 0){
        return
      }
      setInnerContent(<BookingModal/>)
      setModalStatus(true)
    }
  return (
    <OuterBooking ref={ref}>
        <Calendar parent={ref} bookedDates={allBookedDates} pickedDates={bookingTime} setPickedDates={setBookingTime}/>
        <LowerBooking>
        <div className="book"><CustomButton variant="contained" color="secondary" text="Book" event={confirmation}/></div>
        <Button className="reset" variant="text" onClick={()=>{setBookingTime([]); setGuests(1)}} color="primary">Reset</Button>
        <Guests className="guest">
        <Typography variant="p" component="p" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">Guests</Typography>
        <GuestInput value={guests} changer={setGuests} max={max}/>
        </Guests>
        </LowerBooking>
    </OuterBooking>
  )
}

export default Booking