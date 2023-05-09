import Calendar from "../calendar";


import {useState, useRef} from 'react'
import GuestInput from "../input/guestInput";
import CustomButton from "../Button";
import { Box, Typography, Button } from "@mui/material";
import { Guests, OuterBooking, LowerBooking } from "./index.styles";
import useGetBookedDays from "../../hooks/useGetBookedDays";
const Booking = ({bookedDates, guests, changeGuests, max}) => {
    const ref = useRef(null)
    const {allBookedDates} =  useGetBookedDays(bookedDates, guests, max)
    const [pickedDates, setPickedDates] = useState([])
      //here a filter / booking finder will be, to send booked dates based on the amount of guests
  return (
    <OuterBooking ref={ref}>
        <Calendar parent={ref} bookedDates={allBookedDates} pickedDates={pickedDates} setPickedDates={setPickedDates}/>
        <LowerBooking>
        <div className="book"><CustomButton variant="contained" color="secondary" text="Book"/></div>
        <Button className="reset" variant="text" onClick={()=>{setPickedDates([]); changeGuests(1)}} color="primary">Reset</Button>
        <Guests className="guest">
        <Typography variant="p" component="p" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">Guests</Typography>
        <GuestInput value={guests} changer={changeGuests}/>
        </Guests>
        </LowerBooking>
    </OuterBooking>
  )
}

export default Booking