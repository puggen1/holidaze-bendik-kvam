import React from 'react'
import { InnerBooking } from './index.styles'
import { Typography, Box } from '@mui/material'
import { CalendarMonth } from '@mui/icons-material'
const BookingDetails = ({data}) => {
    const {venue, customer} = data
    const {guests, dateFrom, dateTo, } = data
    const from = new Date(dateFrom)
    const to = new Date(dateTo)
    console.log(from, to)
    const day = 1000 * 60 * 60 * 24
    const daysUntil = Math.round(Math.abs((new Date(dateFrom) - new Date()) / day))
    if(Object.keys(data).length > 0){
    return(<InnerBooking>
        <Typography color={"white"} variant="h5" component="h1">Your stay at <Typography variant='h5' display="inline" color={"secondary"}>{venue.name}</Typography> is in {daysUntil} days <Typography variant='h5' display="inline" color={"error"}>{customer.name}</Typography>!</Typography>
        <Box display="flex" gap="0.5rem">
        <CalendarMonth sx={{color:"white"}}/>
        <Typography color={"white"} variant="h5" component="h1">From: {from.getDate()}.{from.getMonth()}</Typography>
        <Typography color={"white"} variant="h5" component="h1">To: {to.getDate()}.{to.getMonth()}</Typography>
        </Box>
    </InnerBooking>
    )}
}

export default BookingDetails