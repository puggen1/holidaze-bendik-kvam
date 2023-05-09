import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetData } from '../../hooks/useGetData'
import { baseUrl } from '../../utils/constants'
import Carousel from '../../components/carousel/default/index'
import { OuterVenue, InnerVenue } from './index.styles'
import VenueInfo from '../../components/venue/venueInfo/index'
const Venue = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetData(baseUrl + "/venues/" + id + "?_owner=true&_bookings=true")
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <OuterVenue>
      <InnerVenue>
      <Carousel images={data.media ? data.media : []}/>
      <VenueInfo venue={data}/>
      </InnerVenue>
    </OuterVenue>)
}

export default Venue