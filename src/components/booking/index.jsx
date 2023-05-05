import Calendar from "../calendar";


import React from 'react'
import GuestInput from "../input/guestInput";
import Button from "../Button";
import { Box, Typography } from "@mui/material";
import { Guests } from "./index.styles";
const Booking = () => {
    const bookedDates = [
        new Date("2023", "4", "05"),
        new Date("2023", "4", "08")
      ]
      //here a filter / booking finder will be, to send booked dates based on the amount of guests
  return (
    <Box sx={{maxWidth:"577px"}}>
        <Calendar bookedDates={bookedDates}/>
        <Box sx={{display:"flex", gap:"10px", margin:"355px auto auto auto", justifyContent:"space-between"}}>
        <Button variant="contained" color="secondary" text="Book"/>
        <Guests>
        <Typography variant="p" component="p" color="primary" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">Guests</Typography>
        <GuestInput/>
        </Guests>
        </Box>
    </Box>
  )
}

export default Booking