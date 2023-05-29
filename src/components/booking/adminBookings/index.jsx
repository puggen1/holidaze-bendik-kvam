import { OuterAdminBooking,AdminBookingCard } from "./index.styles"
import { Button, Typography, Box } from "@mui/material"
import { useEffect, useState } from "react"
import CustomButton from "../../Button"
import { useNavigate } from "react-router-dom"
import filterBookings from "../../../utils/filterBookings.js"
const AdminBookings = ({bookings}) => {
    const navigate = useNavigate()
    const [filteredBookings, setFilteredBookings] = useState(bookings)
    const [filter, setFilter] = useState("all")
    useEffect(() => {
        setFilteredBookings(bookings)
    }, [bookings])
    useEffect(() => {
        setFilteredBookings(filterBookings(bookings, filter))
    }, [filter, bookings])
  return (
    <OuterAdminBooking >
        <Typography variant="h5" gridColumn="1/4" sx={{textAlign:"center"}}>Bookings</Typography>
        <Box gridColumn="1/4" display="flex" justifyContent="space-evenly">
        <Button variant="text" color="secondary" onClick={()=>{setFilter("old")}}>old</Button>
        <Button variant="text" color="secondary" onClick={()=>{setFilter("current")}}>current</Button>
        <Button variant="text" color="secondary" onClick={()=>{setFilter("upcoming")}}>upcoming</Button>
        <Button variant="text" color="secondary" onClick={()=>{setFilter("all")}}>all</Button>
        </Box>
        <Box display="flex"  gridColumn="1/4" gap="2rem" flexDirection="column">
        { filteredBookings.map(booking=>{
            const from = new Date(booking.dateFrom)
            const to = new Date(booking.dateTo);
            return <AdminBookingCard  key={booking.id}>
                <Box className="date" display="flex" gap="0.5rem">
                    <Typography variant="body1">from</Typography>
                <Typography variant="body1">
                {from.getDate()+ "." + (from.getMonth() + 1)} - {to.getDate()+ "." + (to.getMonth() + 1)}
                </Typography>
                </Box>
                <Box className="guests" display="flex" gap="0.5rem">
                    <Typography variant="body1">guests</Typography>
                <Typography variant="body1">{booking.guests}</Typography>
                </Box>
                <Box className="price" display="flex" gap="0.5rem">
                    <Typography variant="body1">price</Typography>
                <Typography>{booking.price},- kr</Typography>
                    </Box>
            <CustomButton text="view" variant="contained" color="secondary" event={()=>{navigate("/booking/" + booking.id)}}/>
            </AdminBookingCard>})}
            </Box>
    </OuterAdminBooking>
  )
}

export default AdminBookings