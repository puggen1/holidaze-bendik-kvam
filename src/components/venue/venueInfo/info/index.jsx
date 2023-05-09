import React from 'react'
import { Typography } from '@mui/material'
import Avatar from "../../../avatar/index"
import { Link } from 'react-router-dom'
import Icons from '../../../icons'
const Info = ({name, description, maxGuests, price, owner, meta}) => {
  return (
    <>
       <Typography variant='h4' fontFamily="Source sans pro" component="h1">{name}</Typography>
       <Link style={{textDecoration:"none"}} to={`/user/${owner.name}`}><Typography color="primary" component="p" variant='p'>Host is {owner.name} <Avatar /> </Typography></Link>
       <Typography variant='body1' fontFamily="Roboto" component="p">{description}</Typography>
        <Icons parking={meta.parking} pets={meta.pets} wifi={meta.wifi} breakfeast={meta.breakfeast} type="card"/>
        <Typography variant='body1' fontFamily="Roboto" component="p">Max {maxGuests}</Typography>
        <Typography variant='body1' fontFamily="Roboto" component="p">{price} per Night</Typography>
    </>
  )
}

export default Info