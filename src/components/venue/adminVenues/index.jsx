import { Box} from '@mui/material'
import { Typography } from 'antd'
import Button from '../../Button'
import React from 'react'
import Card from '../card'
import { Link } from 'react-router-dom'

const AdminVenues = ({venues}) => {
  return (
    <Box className="venues" gridColumn="1/5" gridRow="3/4" boxShadow="0px 0px 5px 1px rgba(29, 43, 56, 0.5)" borderRadius="20px" padding="0 2rem">
      <Box className="topButtons" display="flex" justifyContent="space-between" flexWrap="wrap"  alignItems="center">
        <Typography variant="h3" component="h2" textAlign="center">Venues</Typography>
        <Box display="flex" gap="1rem">
        <Link to="/admin/venues"><Button text="view all" variant="contained" color="secondary"/></Link>
        <Link to="/venue/add"><Button text="add venue" variant="contained" color="primary"/></Link>
        </Box>
        </Box>
    <Box className="allAdminVenues" display="flex" gap="1rem" flexWrap="wrap" padding="2rem 0" >
    {venues.map(venue=>{ return <Card key={venue.id} link={"/admin/venues/" + venue.id} firstImage={venue.media[0]} name={venue.name} price={venue.price} maxGuests={venue.maxGuests} meta={venue.meta}/>
    })}
    </Box>
    </Box>
  )
}

export default AdminVenues