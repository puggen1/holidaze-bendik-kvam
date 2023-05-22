import React from 'react'
import { OuterCard, Guests } from './index.styles'
import { Typography, Box } from '@mui/material'
import calculateDuration from '../../../utils/calculateDuration'
import Button from '../../Button'
import { Link } from 'react-router-dom'
const BookingCard = ({name, from, to, guests, price, id}) => {
    const day = 1000 * 60 * 60 * 24
    const daysUntil = Math.round(Math.abs((new Date(from) - new Date()) / day))
    const duration = calculateDuration(from, to)
    const dateFrom = new Date(from)
    const dateTo = new Date(to)
  return (
    <OuterCard>
        <Typography gridArea="title" fontWeight="100" variant="h5">at {name} in {daysUntil} </Typography>
        <Typography gridArea="guests" display="flex" justifyContent="flex-end" alignItems="center" variant="body1">Number of guests: <Guests>{guests}</Guests> </Typography>
        <Typography gridArea="fromto" fontWeight="100" variant="body1">From: {dateFrom.getDate()}.{dateFrom.getMonth() + 1}  to {dateTo.getDate()}.{dateTo.getMonth() + 1}</Typography>
        <Typography gridArea="price" fontWeight="100" variant="body1">Total price: {price * duration},-</Typography>
        <Link style={{gridArea:"action", display:"flex",justifyContent:"flex-end", textDecoration:"none"}} to={"/booking/" + id}><Button variant="contained" color="secondary" text="View"/></Link>
    </OuterCard>
  )
}

export default BookingCard