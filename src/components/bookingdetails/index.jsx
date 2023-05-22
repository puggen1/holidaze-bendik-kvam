import React from 'react'
import { InnerBooking } from './index.styles'
import { Typography, Box } from '@mui/material'
import { ArrowForward, CalendarMonth, Payments, Person } from '@mui/icons-material'
import useModalToggler from '../../hooks/useModalToggler'
import useSetModalContent from '../../hooks/useSetModalContent'
import Button from '../Button'
import DeleteBooking from '../modal/deleteBooking'
import calculateDuration from '../../utils/calculateDuration'
const BookingDetails = ({data, setEditStatus, editStatus}) => {
    const {modalOn} = useModalToggler()
    const {setModal} = useSetModalContent()
    const {venue, customer} = data
    const {guests, dateFrom, dateTo, } = data
    const from = new Date(dateFrom)
    const to = new Date(dateTo)
    let duration = calculateDuration(from, to)
    const day = 1000 * 60 * 60 * 24
    const daysUntil = Math.round(Math.abs((new Date(dateFrom) - new Date()) / day))
    if(Object.keys(data).length > 0){
    return(<InnerBooking>
        <Typography color={"white"} variant="h5"  component="h1">Your stay at <Typography display="inline" color={"secondary"}>{venue.name}</Typography> is in {daysUntil} days <Typography  display="inline" color={"error"}>{customer.name}</Typography>!</Typography>
        <Box display="flex" gap="0.5rem">
        <CalendarMonth sx={{color:"white"}}/>
        <Typography color={"white"} variant="h5" component="h1">From: {from.getDate()}.{from.getMonth() + 1}</Typography>
        <ArrowForward sx={{color:'white'}}/>
        <Typography color={"white"} variant="h5" component="h1">To: {to.getDate()}.{to.getMonth() + 1}</Typography>
        </Box>
        <Box display="flex" gap="0.5rem">
        <Person sx={{color:"white"}}/>  
        <Typography color={"white"} variant="h5" component="h1">Number of guests: {guests}</Typography>
        </Box>
        <Box display="flex" gap="0.5rem">
        <Payments sx={{color:"white"}}/>
        <Typography color={"white"} variant="h5" component="h1">Total price: {venue.price * duration},-</Typography>
        </Box>
        <Box display="flex" gap="0.5rem"    justifyContent="flex-end" >
            <Button variant="outlined" color="error" text="Cancel booking" event={() => {modalOn(); setModal(<DeleteBooking bookingId={data.id}/>)}}/>
            <Button variant="outlined" color="secondary" text="Edit" event={() => {setEditStatus(!editStatus)}}/>
        </Box>
    </InnerBooking>
    )}
}

export default BookingDetails