import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useGetData } from '../../hooks/useGetData'
import { baseUrl } from '../../utils/constants'
import Carousel from '../../components/carousel/default/index'
import { OuterVenue, InnerVenue, InnerBooking } from './index.styles'
import VenueInfo from '../../components/venue/venueInfo/index'
import Booking from '../../components/booking'
import { BookingContext } from '../../context/bookingContext'
const Venue = () => {
  const { id } = useParams();
  const {guests, setGuests, setVenueId, setVenueName, setPrice} = useContext(BookingContext)
  const { data, isLoading, isError } = useGetData(baseUrl + "/venues/" + id + "?_owner=true&_bookings=true")
  setVenueId(id)
  setVenueName(data.name)
  setPrice(data.price)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <OuterVenue>
      <InnerVenue>
      <Carousel images={data.media ? data.media : []}/>
      <VenueInfo venue={data}/>
      </InnerVenue>
      <InnerBooking>
      <Booking guests={guests} changeGuests={setGuests} bookedDates={data.bookings} max={data.maxGuests}/>
      </InnerBooking>
    </OuterVenue>)
}

export default Venue