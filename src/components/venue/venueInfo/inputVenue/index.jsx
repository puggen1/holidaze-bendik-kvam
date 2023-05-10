import React, { useState } from 'react'
import { InnerInfo } from '../info/index.styles'
import { Typography } from '@mui/material'
import DefaultInput from '../../../input/defaultInput'
import Icons from '../../../icons'
import GuestInput from '../../../input/guestInput'
import { OuterInfo } from '../index.styles'
import { LocationInfo, OuterLocation } from '../location/index.styles'
import Map from '../../../map'

const InputVenue = () => {
  const [guest, setGuest] = useState(1)
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [country, setCountry] = useState("")

//DRY!
  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  const changeCity = (e) => {
    setCity(e.target.value)
  }
  const changeZip = (e) => {
    setZip(e.target.value)
  }
  const changeCountry = (e) => {
    setCountry(e.target.value)
  }

  //icons need to be controlled
  //description needs to be field
  // add yup
  return (
    <OuterInfo>
    <InnerInfo>
      <div className='name'><DefaultInput variant="outlined" color="secondary" text="Venue Name" type="text"/></div>
      <Icons type="filter"/>
      <div className='price'><DefaultInput variant="outlined" color="secondary" text="price" type="number"/></div>
      <div className='guests'><GuestInput value={guest} changer={setGuest}/></div>
      <div className='desc'><DefaultInput variant="outlined" color="secondary" text="Description" type="text"/></div>
    </InnerInfo>
    <OuterLocation>
      <LocationInfo>
        <div className='address'><DefaultInput variant="outlined" color="secondary" text="Address" type="text" value={address} event={changeAddress}/></div>
        <div className='city'><DefaultInput variant="outlined" color="secondary" text="City" type="text" value={city} event={changeCity}/></div>
        <div className='zip'><DefaultInput variant="outlined" color="secondary" text="Zip" type="text" value={zip} event={changeZip}/></div>
        <div className='country'><DefaultInput variant="outlined" color="secondary" text="Country" type="text" value={country} event={changeCountry}/></div>
      </LocationInfo>
      
    </OuterLocation>
    </OuterInfo>
  )
}

export default InputVenue