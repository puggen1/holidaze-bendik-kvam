import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { baseUrl } from '../../utils/constants';
import Carousel from '../../components/carousel/default/index';
import { OuterVenue, InnerVenue, InnerBooking } from './index.styles';
import VenueInfo from '../../components/venue/venueInfo/index';
import Booking from '../../components/booking';
import { BookingContext } from '../../context/bookingContext';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import VenueAdminOptions from '../../components/venueAdminOptions';
import Loader from '../../components/loading';
import { Box } from '@mui/material';
import FetchError from '../../components/fetchError';
const Venue = () => {
  const { id } = useParams();
  const {guests, setGuests, setVenueId, setVenueName, setPrice} = useContext(BookingContext)
  const { data, isLoading, isError } = useGetData(baseUrl + "/venues/" + id + "?_owner=true&_bookings=true")
  const name = useGetUserInfo("name")
  //added into useEffect to prevent setting state on something that is loading...
  useEffect(() => {
    setVenueId(id)
    setVenueName(data.name)
    setPrice(data.price)
    
    if(Object.keys(data).length > 0 && data.maxGuests < guests){
      setGuests(data.maxGuests)
    }
  }, [data, id, setVenueId, setVenueName, setPrice, setGuests, guests])
 
  if (isLoading) return<Box margin="2rem"><Loader/></Box>
  if (isError) return <FetchError/>
  if(Object.keys(data).length > 0 && (!isError && !isLoading)){return (
    <OuterVenue>
      <InnerVenue>
      <Carousel images={data.media ? data.media : []}/>
      <VenueInfo venue={data}/>
      </InnerVenue>
      <InnerBooking>
      {data.owner.name !== name ?<Booking guests={guests} changeGuests={setGuests} bookedDates={data.bookings} max={data.maxGuests}/> : <VenueAdminOptions venueId={id}/>}
      </InnerBooking>
    </OuterVenue>)
}}

export default Venue