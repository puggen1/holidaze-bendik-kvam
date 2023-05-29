import React from 'react'
import {Typography, Box } from '@mui/material'
import { VenueCard, VenueCardMedia, VenueCardContent } from './index.styles'
import Icons from '../../icons';
import Button from '../../Button';
import { Link } from 'react-router-dom';
const Card = ({link, firstImage, name, price, maxGuests, meta={}}) => {
    const {pets, wifi, parking, breakfast} = meta;
    
  return (
    <VenueCard className='venueCard'>
        <VenueCardMedia component="img" alt={"a picture from the venue: " + name} image={firstImage ? firstImage : "https://placehold.co/400"}/>
        <VenueCardContent className='content'>
            <Box className="top">
            <Typography variant="body1"  fontFamily={"roboto, sans-serif"} m={0}  component="h2">{name}</Typography>
            <Typography className='price' fontFamily={"roboto, sans-serif"} variant="p" m={0} component="p">{price},- kr</Typography>
            <Icons type='card' pets={pets} parking={parking} wifi={wifi} breakfast={breakfast}/>
            <Typography className='guests' fontFamily={"roboto, sans-serif"} variant='p' m={0} mt={3} mb={0} component="p">max guests: {maxGuests}</Typography>
            </Box>
            <Link to={link}><Button text="View" color="secondary" variant="contained"/></Link>
        </VenueCardContent>
    </VenueCard>
  )
}

export default Card