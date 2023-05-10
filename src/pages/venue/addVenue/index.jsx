import {useState} from 'react'
import { InnerVenue, OuterVenue } from '../index.styles'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
const AddVenue = () => {
  
  return (
    <OuterVenue>
        <InnerVenue>
        <AddPictures/>
        <InputVenue/>
        </InnerVenue>
    </OuterVenue>
  )
}

export default AddVenue