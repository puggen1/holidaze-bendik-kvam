import {useEffect, useState} from 'react'
import { InnerBooking } from './index.styles'
import { Typography, Box } from '@mui/material'
import { ArrowForward, CalendarMonth, Payments, Person } from '@mui/icons-material'
import useModalToggler from '../../hooks/useModalToggler'
import useSetModalContent from '../../hooks/useSetModalContent'
import Button from '../Button'
import DeleteBooking from '../modal/deleteBooking'
import calculateDuration from '../../utils/calculateDuration'
import { set } from 'react-hook-form'
const BookingDetails = ({data, setEditStatus, editStatus, adminView}) => {
    const {modalOn} = useModalToggler()
    const {setModal} = useSetModalContent()
    const [message, setMessage] = useState("")
    const {venue, customer} = data
    const {guests, dateFrom, dateTo, } = data
    const from = new Date(dateFrom)
    const to = new Date(dateTo)
    let duration = calculateDuration(from, to)
    const day = 1000 * 60 * 60 * 24
    const daysUntil = Math.round((from - new Date()) / day)
    useEffect(()=>{
    if(daysUntil === 0){
        const message = `${adminView ? customer.name + `'s`: "Your"}stay at ${venue.name} starts today!`
        setMessage(message)
    }
    else if(daysUntil > 0){
        const message = `${adminView ? customer.name + `'s`: "Your"} stay at ${venue.name} starts in ${daysUntil} days!`
        setMessage(message)
    }
    //if the booking is currently active, also last day
    else if(daysUntil + duration === 0 || daysUntil < 0 && daysUntil > duration){
        const message = `${adminView ? customer.name: "You"} are currently staying at ${venue.name}!`
        setMessage(message)
    }
    else if(daysUntil < duration){
        console.log()
        const message = `${adminView ? customer.name : "You"} stayed at ${venue.name}, ${-daysUntil - duration} days ago!`
        setMessage(message)
    }
    },[data, adminView, customer, venue, duration, daysUntil])
    if(Object.keys(data).length > 0){
    return(<InnerBooking>
        <Typography color={"white"} variant="h5"  component="h1">{message}</Typography>
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
        {!adminView && <Box display="flex" gap="0.5rem"    justifyContent="flex-end" >
            <Button variant="outlined" color="error" text="Cancel booking" event={() => {modalOn(); setModal(<DeleteBooking bookingId={data.id}/>)}}/>
            <Button variant="outlined" color="secondary" text="Edit" event={() => {setEditStatus(!editStatus)}}/>
        </Box>}
    </InnerBooking>
    )}
}

export default BookingDetails