import Calendar from "../calendar";
import {useState, useRef, useContext} from 'react'
import GuestInput from "../input/guestInput";
import CustomButton from "../Button";
import { Box, Typography, Button } from "@mui/material";
import { Guests, OuterBooking, LowerBooking } from "./index.styles";
import useGetBookedDays from "../../hooks/useGetBookedDays";
import { BookingContext } from "../../context/bookingContext";
import BookingModal from "../modal/booking";
import useCheckPermission from "../../hooks/useCheckPermission";
import useModalToggler from "../../hooks/useModalToggler";
import useSetModalContent from "../../hooks/useSetModalContent";
import Login from "../modal/login";
const Booking = ({bookedDates, max}) => {
  const {checkPermission} = useCheckPermission()
  const {modalOn} = useModalToggler()
  const {setModal} = useSetModalContent()
  const auth = checkPermission("auth")
  const {bookingTime, setBookingTime, guests, setGuests} = useContext(BookingContext)
    const ref = useRef(null)
    const {allBookedDates} =  useGetBookedDays(bookedDates, guests, max)
    const confirmation = () => {
      if(bookingTime.length === 0){
        return
      }
      modalOn()
      setModal(<BookingModal/>)
    }
    const notLoggedIn = () => {
      modalOn()
      setModal(<Login/>)
    };
  return (
    <OuterBooking ref={ref}>
        <Calendar parent={ref} bookedDates={allBookedDates} pickedDates={bookingTime} setPickedDates={setBookingTime} loggedIn={auth}/>
        <LowerBooking>
        <div className="book">
        <CustomButton variant="contained" color="secondary" text={auth ? "Book" : "login"} event={auth ? confirmation : notLoggedIn}/></div>
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