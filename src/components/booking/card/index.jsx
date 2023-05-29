import React from 'react'
import { OuterCard, Guests } from './index.styles'
import { Typography ,Box} from '@mui/material'
import calculateDuration from '../../../utils/calculateDuration'
import Button from '../../Button'
import { Link } from 'react-router-dom'
const BookingCard = ({name, from, to, guests, price, link}) => {
    const day = 1000 * 60 * 60 * 24
    const daysUntil = Math.round(Math.abs((new Date(from) - new Date()) / day))
    const duration = calculateDuration(from, to)
    const dateFrom = new Date(from)
    const dateTo = new Date(to)
  return (
    <OuterCard>
        <Typography gridArea="title" fontWeight="100" component="h3" variant="h5">at {name} in {daysUntil} days </Typography>
        <Box display="flex" justifyContent="flex-end"  gridArea="guests"><Typography  display="flex" justifyContent="flex-end" alignItems="center" variant="body1">Guests: </Typography><Guests component="p">{guests}</Guests> </Box>
        <Typography gridArea="fromto" fontWeight="100" variant="body1">From: {dateFrom.getDate()}.{dateFrom.getMonth() + 1}  to {dateTo.getDate()}.{dateTo.getMonth() + 1}</Typography>
        <Typography gridArea="price" fontWeight="100" variant="body1">Total price: {price * duration},- kr</Typography>
        <Link style={{gridArea:"action", display:"flex",justifyContent:"flex-end", textDecoration:"none"}} to={link}><Button variant="contained" color="secondary" text="View"/></Link>
    </OuterCard>
  )
}

export default BookingCard