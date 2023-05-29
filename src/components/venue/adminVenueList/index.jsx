import React from 'react'
import { Typography } from '@mui/material'
import { OuterVenueList } from './index.style'
import { VenueCardMedia, VenueCard, VenueCardContent } from '../card/index.styles'

const AdminVenueList = ({venues, current, changer}) => {
  return (
    <OuterVenueList>
    {venues.map(venue=>{
        return <VenueCard className='adminVenue' onClick={()=>{changer(venue.id)}} key={venue.id} sx={venue.id === current ? {boxSizing:"border-box", border:"solid #CC6238 3px"} : null}>
          <VenueCardMedia component="img" alt={"the image for " + venue.name} image={venue.media[0] ? venue.media[0] : "https://placehold.co/400"} />
          <VenueCardContent sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Typography variant="body1" component="p" textAlign="center">{venue.name}</Typography>
          </VenueCardContent>
        </VenueCard>
      })
    }
    </OuterVenueList>
  )
}

export default AdminVenueList