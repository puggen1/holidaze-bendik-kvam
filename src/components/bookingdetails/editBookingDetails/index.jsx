import {useContext, useEffect, useRef, useState} from 'react'
import { InnerEditBooking } from './index.styles'
import dayjs from "dayjs"
import Calendar from '../../calendar'
import { BookingContext } from '../../../context/bookingContext'
import useGetallBookedDates from '../../../hooks/useGetBookedDays'
import { useGetData } from '../../../hooks/useGetData'
import { baseUrl } from '../../../utils/constants'
import GuestInput from '../../input/guestInput'
import { Box, Button as MuiButton } from '@mui/material'
import Button from '../../Button'
import useModalToggler from '../../../hooks/useModalToggler'
import useSetModalContent from '../../../hooks/useSetModalContent'
import Booking from '../../modal/booking'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
const EditBookingDetails = ({setEditStatus, editStatus, originalPickedDated, maxGuests, currentGuests, venueId, bookingId}) => {
  const {handleBar} = useHandleSnackbar()
  const [sameBooking, setSameBooking] = useState(false)
  const {data} = useGetData(baseUrl + "/venues/" + venueId + "?_bookings=true")
  const {setBookingTime, bookingTime, setVenueId, guests, setGuests, setPrice, setBookingId} = useContext(BookingContext)
  const {modalOn} = useModalToggler()
  const {setModal} = useSetModalContent()
  //when data, find all booked dates
  const {allBookedDates} = useGetallBookedDates(Object.keys(data).length > 0 ? data.bookings : [], guests, maxGuests,true, originalPickedDated)
  

//for the calendar
  const innerEditBookingRef = useRef(null)

  //the editBooking times
  useEffect(() => {
    setBookingTime([dayjs(originalPickedDated[0]), dayjs(originalPickedDated[1])])
    setGuests(currentGuests)
    setVenueId(venueId)
    setPrice(Object.keys(data).length > 0 ? data.price : 0)
    setBookingId(bookingId)
  }, [data, currentGuests, originalPickedDated, setBookingTime, setGuests, setVenueId, setPrice, setBookingId, venueId, bookingId])
  useEffect(() => {
    if(bookingTime === undefined || bookingTime[0] === undefined || bookingTime[1] === undefined){
      return
    }
    if((bookingTime[0].isSame(dayjs(originalPickedDated[0])) && bookingTime[1].isSame(dayjs(originalPickedDated[1])) && guests === currentGuests)){
      setSameBooking(true)
    }
    else{
      setSameBooking(false)
    }
  }, [bookingTime, guests, currentGuests, originalPickedDated])
  const modalAction = () => {
    if(sameBooking){
      handleBar("You have not made any changes", "error")
      return
    }
    modalOn();
    setModal(<Booking type="update"/>)
  }
  return (
    <InnerEditBooking ref={innerEditBookingRef}>
        <Calendar bookedDates={allBookedDates} pickedDates={bookingTime} setPickedDates={setBookingTime} parent={innerEditBookingRef} loggedIn={true} />
        <Box justifyContent="flex-end" display="flex" flexDirection="row" flexWrap="wrap" alignItems="flex-end" gap="1rem" alignContent="flex-end">
          <Box display="flex" flex="1" justifyContent="flex-end">
        <GuestInput value={guests} changer={setGuests} max={maxGuests}/>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="1rem">
        <MuiButton variant='text' color='secondary' onClick={()=>{setBookingTime([dayjs(originalPickedDated[0]), dayjs(originalPickedDated[1])]); setGuests(currentGuests)}}>Reset</MuiButton>
        <Button variant="outlined" color="error" text="cancel" event={()=>{setEditStatus(!editStatus)}}/>
        <Button variant="outlined" color="secondary" text="update" event={()=>{modalAction()}}/>

        </Box>
        </Box>
    </InnerEditBooking>
  )
}

export default EditBookingDetails