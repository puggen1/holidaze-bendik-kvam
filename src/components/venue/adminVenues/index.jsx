import { Box} from '@mui/material'
import { Typography } from 'antd'

import React from 'react'
import Card from '../card'

const AdminVenues = ({venues}) => {
  return (
    <Box gridColumn="1/3" gridRow="3/4" >
        <Typography variant="h3" component="h3" textAlign="center">Venues</Typography>
    <Box display="flex" gap="1rem" flexWrap="wrap" >
    {venues.map(venue=>{ return <Card key={venue.id} link={"/admin/venues/" + venue.id} firstImage={venue.media[0]} name={venue.name} price={venue.price} maxGuests={venue.maxGuests} meta={venue.meta}/>
    })}
    </Box>
    </Box>
  )
}

export default AdminVenues