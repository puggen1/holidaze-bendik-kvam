import React, { useContext, useEffect } from 'react'
import DefaultInput from '../../../input/defaultInput'
import Icons from '../../../icons'
import GuestInput from '../../../input/guestInput'
import { OuterInfo } from '../index.styles'
import { LocationInfo, OuterLocation } from '../location/index.styles'
import { InnerEditInfo } from './index.styles'
import AddEditContext from '../../../../context/addEditContext'
import { Typography } from '@mui/material'
const InputVenue =({venue}) => {
  const { setVenueInfo, setMedia,media, venueInfo, meta, setMeta,setGuest, guest,  register,
    setValue,
    errors} = useContext(AddEditContext)
  //adds data if edit and not create/add
  const priceInput = (name) => register(name, {
    setValue: (value) => {
      const number = parseFloat(value);
      register(name).onChange(number);
    }
  });
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
      setValue("location.address", venue.location.address ? venue.location.address : "")
      setValue("location.city", venue.location.city ? venue.location.city : "")
      setValue("location.zip", venue.location.zip ? venue.location.zip : "")
      setValue("location.country", venue.location.country ? venue.location.country : "")
      setValue("media", venue.media)
      setValue("maxGuests", venue.maxGuests)
      setValue("id", venue.id ? venue.id : "")
      setMedia(venue.media)
      setVenueInfo(venue)
    }
  }, [setValue, venue, setVenueInfo, setMedia, setGuest, setMeta])
  useEffect(() => {
    setVenueInfo({ ...venueInfo, media });
  }, [media, venueInfo, setVenueInfo]);
  useEffect(() => {
    setValue("maxGuests", guest)
  }, [guest, setValue]);
  useEffect(() => {
    setVenueInfo({ ...venueInfo, maxGuests: guest });
  }, [guest, venueInfo, setVenueInfo]);
  
  /*const mapPreview = () => {
    if (venueInfo.location.address.length > 0) {
     
    }
  }*/
  return (
    <form >
    <OuterInfo>
    <InnerEditInfo>
      <div className='name'>
        <DefaultInput manager={{...register("name")}} variant="outlined" color={ errors.name? "error" : "secondary"} text="Venue Name" type="text"/>
        <Typography minHeight="1.5rem" color="primary">{errors.name?.message}</Typography>
        </div>
      <div className='icons'>
        <Icons meta={meta} changer={setMeta} type="addEdit"/>
        </div>
      <div className='price'>
        <DefaultInput manager={{...priceInput("price")}} variant="outlined" color={ errors.price? "error" : "secondary"} text="price" type="number" />
        <Typography minHeight="1.5rem" color="primary">{errors.price?.message}</Typography>
      </div>
      <div className='guests'>
        <GuestInput value={guest} changer={setGuest}/>
        <Typography minHeight="1.5rem" color="primary">{errors.maxGuests?.message}</Typography>
      </div>
      <div className='desc'>
        <DefaultInput multiLine={true} manager={{...register("description")}} variant="outlined" color={ errors.description? "error" : "secondary"} text="Description" type="text"/>
        <Typography minHeight="1.5rem" color="primary">{errors.description?.message}</Typography>
      </div>
    </InnerEditInfo>
    <OuterLocation>
      <LocationInfo>
        <div className='address'><DefaultInput manager={{...register("location.address"), }} variant="outlined" color="secondary" text="Address" type="text" /></div>
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