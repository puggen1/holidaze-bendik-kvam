import Calendar from "../calendar";


import {useState} from 'react'
import GuestInput from "../input/guestInput";
import CustomButton from "../Button";
import { Box, Typography, Button } from "@mui/material";
import { Guests } from "./index.styles";
import useGetBookedDays from "../../hooks/useGetBookedDays";
const Booking = ({bookedDates, guests, changeGuests, max}) => {
    const {allBookedDates} =  useGetBookedDays(bookedDates, guests, max)
    const [pickedDates, setPickedDates] = useState([])
      //here a filter / booking finder will be, to send booked dates based on the amount of guests
  return (
    <Box sx={{maxWidth:"577px", margin:"0 auto"}}>
        <Calendar bookedDates={allBookedDates} pickedDates={pickedDates} setPickedDates={setPickedDates}/>
        <Box sx={{display:"flex", gap:"10px", margin:"355px auto auto auto", justifyContent:"space-between"}}>
        <CustomButton variant="contained" color="secondary" text="Book"/>
        <Button variant="text" onClick={()=>{setPickedDates([]); changeGuests(1)}} color="primary">Reset</Button>
        <Guests>
        <Typography variant="p" component="p" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">Guests</Typography>
        <GuestInput value={guests} changer={changeGuests}/>
        </Guests>
        </Box>
    </Box>
  )
}

export default Booking