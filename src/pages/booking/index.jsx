import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { baseUrl } from '../../utils/constants'
import { useGetData } from '../../hooks/useGetData'
import useGetUserInfo from '../../hooks/useGetUserInfo'
import { useNavigate } from 'react-router'
import { OuterBooking } from './index.styles'
import BookingDetails from '../../components/bookingdetails'
const Booking = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const auth = useGetUserInfo("accessToken")
  const {data, isLoading, isError} = useGetData(baseUrl + "/bookings/" + id + "?_customer=true&_venue=true", auth)
  const name = useGetUserInfo("name")

  const venueManager = useGetUserInfo("venueManager")
  useEffect(()=>{
    //since we only can check if it the guest, im going to let every venuemanager see the booking if the somehow get the id
    if((!isLoading && !isError) && (data.customer.name !== name || !venueManager) ){
      //navigate(-1)
    }
    else if(isError){
      navigate(-1)
    }
    }
  ,[data ,isLoading, isError, name, venueManager])
  return (
    <OuterBooking image={Object.keys(data).length > 0 ? data.venue.media[0] : null}>
      <BookingDetails data={data ? data : []}/>
    </OuterBooking>
  )
}

export default Booking