import React from 'react'
import { Typography } from '@mui/material'
import Avatar from "../../../avatar/index"
import { Link } from 'react-router-dom'
import Icons from '../../../icons'
import { InnerInfo } from './index.styles'
const Info = ({name, description, maxGuests, price, owner, meta}) => {
  return (
    <InnerInfo>
       <Typography className='name' variant='h4' fontFamily="Source sans pro" component="h1">{name}</Typography>
       <Link className='host' style={{textDecoration:"none"}} to={`/profile/${owner.name}`}> <Typography fontFamily="Roboto" fontWeight={400} fontSize="1.2rem">Host is {owner.name}</Typography><Avatar name={owner.name} src={owner.avatar} type='small'/></Link>
        <Icons parking={meta.parking} pets={meta.pets} wifi={meta.wifi} breakfast={meta.breakfast} type="card"/>
        <Typography className="price" variant='body1' fontWeight={300} fontSize="1.5rem" fontFamily="Roboto" component="p">{price},- per Night</Typography>
        <Typography className='guests' fontWeight={300} variant='body1' fontSize="1.5rem" fontFamily="Roboto" component="p">Max {maxGuests}</Typography>
        <Typography className='desc' variant='body1' fontWeight={300} fontSize="1.2rem" fontFamily="Roboto" component="p">{description}</Typography>

    </InnerInfo>
  )
}

export default Info