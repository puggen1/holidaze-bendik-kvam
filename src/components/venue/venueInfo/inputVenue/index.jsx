import React, { useState, useContext, useEffect } from 'react'
import DefaultInput from '../../../input/defaultInput'
import Icons from '../../../icons'
import GuestInput from '../../../input/guestInput'
import { OuterInfo } from '../index.styles'
import { LocationInfo, OuterLocation } from '../location/index.styles'
import { InnerEditInfo } from './index.styles'
import { set, useForm } from 'react-hook-form'
import AddEditContext from '../../../../context/addEditContext'
const InputVenue =({venue}) => {
  const { register, handleSubmit, setValue,  } = useForm();
  const { setVenueInfo, setMedia, venueInfo, meta, setMeta,setGuest, guest, tester } = useContext(AddEditContext)
  //adds data if edit and not create/add
  useEffect(()=>{
    if(venue){
      setMeta({
        parking: venue.meta.parking,
        pets: venue.meta.pets,
        breakfast: venue.meta.breakfast,
        wifi: venue.meta.wifi,
      })
      setValue("name", venue.name)
      setValue("price", venue.price)
      setGuest(venue.maxGuests)
      setValue("description", venue.description ? venue.description : "")
      setValue("location.address", venue.address ? venue.address : "")
      setValue("location.city", venue.city ? venue.city : "")
      setValue("location.zip", venue.zip ? venue.zip : "")
      setValue("location.country", venue.country ? venue.country : "")
      setValue("media", venue.media)
      setValue("maxGuests", venue.maxGuests)
      setMedia(venue.media)
      setVenueInfo(venue)
    }
  }, [])
   
    const onEvent = (data) => {
      setVenueInfo({...venueInfo, ...data, maxGuests: guest})
      
  }
  return (
    <form onChange={handleSubmit(onEvent)} onSubmit={handleSubmit(onEvent)}>
    <OuterInfo>
    <InnerEditInfo>
      <div className='name'><DefaultInput manager={{...register("name")}} variant="outlined" color="secondary" text="Venue Name" type="text"/></div>
      <div className='icons'><Icons meta={meta} changer={setMeta} type="addEdit"/></div>
      <div className='price'><DefaultInput manager={{...register("price")}} variant="outlined" color="secondary" text="price" type="number"/></div>
      <div className='guests'><GuestInput value={guest} changer={setGuest}/></div>
      <div className='desc'><DefaultInput manager={{...register("description")}} variant="outlined" color="secondary" text="Description" type="text"/></div>
    </InnerEditInfo>
    <OuterLocation>
      <LocationInfo>
        <div className='address'><DefaultInput manager={{...register("location.address")}} variant="outlined" color="secondary" text="Address" type="text" /></div>
        <div className='city'><DefaultInput manager={{...register("location.city")}} variant="outlined" color="secondary" text="City" type="text" /></div>
        <div className='zip'><DefaultInput manager={{...register("location.zip")}} variant="outlined" color="secondary" text="Zip" type="text" /></div>
        <div className='country'><DefaultInput manager={{...register("location.country")}} variant="outlined" color="secondary" text="Country" type="text" /></div>
      </LocationInfo>
    </OuterLocation>
    </OuterInfo>
    </form>
  )
}

export default InputVenue