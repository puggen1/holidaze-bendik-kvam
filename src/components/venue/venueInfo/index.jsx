import React from 'react'
import Info from './info/index'
import Location from './location/index'
import { OuterInfo } from './index.styles'
const VenueInfo = ({venue}) => {
    console.log(venue)

    const {name, location, description, maxGuests, price, owner, meta} = venue
  return (
    <OuterInfo>
    <Info name={name} description={description} maxGuests={maxGuests} price={price} owner={owner} meta={meta}/>
    <Location location={location}/>
    </OuterInfo>
  )
}

export default VenueInfo