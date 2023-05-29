import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '../../venue/card'
import BookingCard from '../../booking/card'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button'
import { OuterContent } from './index.styles'
const ProfileContent = ({venues, bookings, type, own, isAdmin}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const bookingLink=<Link style={{gridColumn:"2/3", margin:"0 0 0 auto"}} to={location.pathname + "/bookings"}> <Button text="See all Bookings" variant="contained" color="secondary"/> </Link>
    const venueLink=<Link style={{gridColumn:"2/3", margin:"0 0 0 auto"}} to={location.pathname + "/venues"}> <Button text="See all Venues" variant="contained" color="secondary"/> </Link>
    const backLink=<Box gridColumn="2/3" margin="0 0 0 auto"><Button text="Back" variant="contained" color="secondary" event={()=>{navigate(-1)}}/></Box>
  return (
    <OuterContent >
        {((type === "regular" || type==="venues") && isAdmin) &&
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="1rem" >
        <Typography gridColumn="1/2" variant='h6' component="h2" fontWeight="100"> Venues</Typography>
        {type === "regular" ? venueLink : backLink}
        <Box className="profileVenue" gridColumn="1/3"  display="flex" flexDirection="row" flexWrap="wrap"justifyContent="space-between">
        {venues.length > 0 ? venues.map((venue, i) =>{ if(i === 2 && type==="regular"){return null } return(<Card key={venue.id} link={"/venue/"+ venue.id} firstImage={venue.media[0] ? venue.media[0] : ""} name={venue.name} price={venue.price} maxGuests={venue.maxGuests} meta={venue.meta}/>)}) : <div>no content</div>}
        </Box>
    </Box>}
    {((type === "regular" || type==="bookings") && own) &&
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="1rem">
    <Typography gridColumn="1/2" variant='h6' component="h2" fontWeight="100"> Bookings</Typography>
        {type === "regular" ? bookingLink : backLink}
        <Box gridColumn="1/3" gap="1rem" display="flex" flexDirection="column">
            {bookings.length > 0 ? bookings.map((booking, i) =>{ if(i >= 3 && type ==="regular"){return null} return <BookingCard key={booking.id} name={booking.venue.name} from={booking.dateFrom} to={booking.dateTo} guests={booking.guests} price={booking.venue.price} link={"/booking/" + booking.id} />}) : <div>No bookings</div>}
        </Box>
    </Box> }
    </OuterContent>
  )
}

export default ProfileContent