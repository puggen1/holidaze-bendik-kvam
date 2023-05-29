import React from 'react'
import { Skeleton } from '@mui/material'

import {Typography, Box } from '@mui/material'
import { VenueCard, VenueCardMedia, VenueCardContent } from '../index.styles'
import { Link } from 'react-router-dom';
import Button from '../../../Button';
const loadingCard = () => {
  return (
    <VenueCard className='venueCard'>
        <Skeleton animation="wave" variant='rectangular'>
        <VenueCardMedia component="img"/>
        </Skeleton>
        <VenueCardContent className='content'>
            <Box className="top">
            <Skeleton animation="wave" variant='text'>
            <Typography variant="p"  fontFamily={"roboto, sans-serif"} m={0}  component="h3">....................</Typography>
            </Skeleton>
            <Skeleton animation="wave" variant='text'>
            <Typography className='price' fontFamily={"roboto, sans-serif"} variant="p" m={0} component="p">.........</Typography>
            </Skeleton>
            <Skeleton animation="wave" variant='text'>
            <Typography className='guests' fontFamily={"roboto, sans-serif"} variant='p' m={0} mt={3} mb={0} component="h4">...............</Typography>
            </Skeleton>
            </Box>
          
            <Link>
            <Skeleton animation="wave" variant='rectangular'>
                <Button text="View" color="secondary" variant="contained"/>
            </Skeleton>
            </Link>
            
        </VenueCardContent>
    </VenueCard>
  )
}

export default loadingCard