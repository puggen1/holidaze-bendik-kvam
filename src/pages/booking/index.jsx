import  { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { baseUrl } from '../../utils/constants'
import { useGetData } from '../../hooks/useGetData'
import useGetUserInfo from '../../hooks/useGetUserInfo'
import { useNavigate } from 'react-router'
import { OuterBooking } from './index.styles'
import BookingDetails from '../../components/bookingdetails'
import EditBookingDetails from '../../components/bookingdetails/editBookingDetails'
import { Box } from '@mui/material'
import Loader from '../../components/loading'
import FetchError from '../../components/fetchError'
const Booking = () => {
  const [editStatus, setEditStatus] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const auth = useGetUserInfo("accessToken")
  const {data, isLoading, isError} = useGetData(baseUrl + "/bookings/" + id + "?_customer=true&_venue=true", auth)
  const name = useGetUserInfo("name")
  const venueManager = useGetUserInfo("venueManager")
  useEffect(()=>{
    //since we only can check if it the guest, im going to let every venuemanager see the booking if the somehow get the id
    if((Object.keys(data).length > 0) && (data.customer?.name !== name) ){
      if(!venueManager){
        navigate(-1)
      }
      
    }
    else if(isError){
      navigate(-1)
    }
    }
  ,[data ,isLoading, isError, name, venueManager, navigate])
  if(isLoading) return (<Box><Loader/></Box>)
  if(isError) return (<FetchError/>)
  return (
    <OuterBooking image={(Object.keys(data).length > 0 && data.id) ? data.venue.media[0] : null}>
      <BookingDetails data={data.id ? data : []}  setEditStatus={setEditStatus} adminView={data.customer?.name !== name && venueManager} editStatus={editStatus}/>
      {editStatus && <EditBookingDetails bookingId={id} venueId={data.venue.id} currentGuests={data.guests} maxGuests={Object.keys(data).length > 0 ? data.venue.maxGuests : 100} setEditStatus={setEditStatus} editStatus={editStatus} originalPickedDated={Object.keys(data).length > 0 ? [new Date(data.dateFrom), new Date(data.dateTo)] : []}/>}
    </OuterBooking>
  )
}

export default Booking