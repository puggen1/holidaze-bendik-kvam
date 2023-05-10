import React, { useState, useContext } from 'react'
import { Typography } from '@mui/material'
import DefaultInput from '../../../input/defaultInput'
import Icons from '../../../icons'
import GuestInput from '../../../input/guestInput'
import { OuterInfo } from '../index.styles'
import { LocationInfo, OuterLocation } from '../location/index.styles'
import { InnerEditInfo } from './index.styles'
import { useForm } from 'react-hook-form'
import AddEditContext from '../../../../context/addEditContext'
const InputVenue = ({venue}) => {
  const {venueInfo, setVenueInfo} = useContext(AddEditContext)
  const [guest, setGuest] = useState(1)
    const { register, handleSubmit, setValue } = useForm();
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
  return (
    <form onChange={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
    <OuterInfo>
    <InnerEditInfo>
      <div className='name'><DefaultInput manager={{...register("name")}} variant="outlined" color="secondary" text="Venue Name" type="text"/></div>
      <div className='icons'><Icons meta={meta} changer={setMeta} type="addEdit"/></div>
      <div className='price'><DefaultInput manager={{...register("price")}} variant="outlined" color="secondary" text="price" type="number"/></div>
      <div className='guests'><GuestInput value={guest} changer={setGuest}/></div>
      <div className='desc'><DefaultInput manager={{...register("desc")}} variant="outlined" color="secondary" text="Description" type="text"/></div>
    </InnerEditInfo>
    <OuterLocation>
      <LocationInfo>
        <div className='address'><DefaultInput manager={{...register("address")}} variant="outlined" color="secondary" text="Address" type="text" /></div>
        <div className='city'><DefaultInput manager={{...register("city")}} variant="outlined" color="secondary" text="City" type="text" /></div>
        <div className='zip'><DefaultInput manager={{...register("zip")}} variant="outlined" color="secondary" text="Zip" type="text" /></div>
        <div className='country'><DefaultInput manager={{...register("country")}} variant="outlined" color="secondary" text="Country" type="text" /></div>
      </LocationInfo>
    </OuterLocation>
    </OuterInfo>
    </form>
  )
}

export default InputVenue