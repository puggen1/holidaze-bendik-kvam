import React, { useState, useContext, useEffect } from 'react'
import DefaultInput from '../../../input/defaultInput'
import Icons from '../../../icons'
import GuestInput from '../../../input/guestInput'
import { OuterInfo } from '../index.styles'
import { LocationInfo, OuterLocation } from '../location/index.styles'
import { InnerEditInfo } from './index.styles'
import { set, useForm } from 'react-hook-form'
import AddEditContext from '../../../../context/addEditContext'
const InputVenue = ({venue}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [guest, setGuest] = useState(1)
  const {setVenueInfo, setMedia} = useContext(AddEditContext)

  useEffect(()=>{
    if(venue){
      setValue("name", venue.name ? venue.name : "")
      setValue("price", venue.price ? venue.price : 0)
      setGuest(venue.maxGuests ? venue.maxGuests : 1)
      setValue("description", venue.description ? venue.description : "")
      setValue("meta", venue.meta ? venue.meta : {})
      setValue("address", venue.address ? venue.address : "")
      setValue("city", venue.city ? venue.city : "")
      setValue("state", venue.state ? venue.state : "")
      setValue("zip", venue.zip ? venue.zip : "")
      setValue("country", venue.country ? venue.country : "")
      setValue("media", venue.media ? venue.media : [])
      setValue("maxGuests", venue.maxGuests ? venue.maxGuests : 1)
      setMedia(venue.media ? venue.media : [] )
    }
  }, [])
    
    const [meta, setMeta] = useState({
      parking: venue? venue.meta.parking : false,
      pets: venue? venue.meta.pets : false,
      breakfast:venue? venue.meta.breakfast :  false,
      wifi: venue? venue.meta.wifi : false,
    })
    const onSubmit = (data) => {
      let allData = {...data, maxGuests: guest, meta}
      setVenueInfo(allData)
  }
  useEffect(()=>{
    onSubmit()
  }, [guest, meta])
  return (
    <form onChange={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
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