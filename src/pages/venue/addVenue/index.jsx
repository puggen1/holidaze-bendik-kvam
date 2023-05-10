import React from 'react'
import { InnerVenue, OuterVenue } from '../index.styles'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'

const AddVenue = () => {
  return (
    <OuterVenue>
        <InnerVenue>
            <InputVenue/>
        </InnerVenue>
    </OuterVenue>
  )
}

export default AddVenue