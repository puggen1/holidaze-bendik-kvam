import React from 'react'
import { OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions} from './index.styles'
import { Typography , Box} from '@mui/material'
import DefaultInput from '../input/defaultInput'
import { ArrowForward, ExpandMore, Search } from '@mui/icons-material'
import { DatePicker } from 'antd'
import Button from '../Button'
import GuestInput from '../input/guestInput'
import { Link } from 'react-router-dom'
const { RangePicker } = DatePicker;
const Hero = () => {

  return (
    <OuterHero sx={{backgroundImage:"url(/background.jpg)"}}>
        <InnerHero>
            <Typography variant='h1' component="h1"  fontSize="4rem" color="white" fontFamily="source sans pro">Plan your next holiday here</Typography>
            <HeroSearch>
            <DefaultInput variant="outlined"  placeholder="find a venue or search by location"><Search/></DefaultInput>
            </HeroSearch>
            <HeroDate>
                <Typography className='from' variant="p" component="p" color="white" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">From</Typography>
                <Typography className='to' variant="p" component="p" color="white" fontWeight="300" fontSize="1.5rem" fontFamily="Roboto">To</Typography>
                <RangePicker separator={<ArrowForward sx={{color:"white"}}/>}/>
            </HeroDate>
            <HeroOptions>
                <Button variant="contained" color="secondary" text="Find"/>
                <Box style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">Number of guests</Typography>
                <GuestInput/>
                </Box>
            </HeroOptions>
                <Link to="#venues" style={{textDecoration:"none",display:"flex", flexDirection:"column", alignItems:"center", margin:"auto 0 2rem 0"}}>
                <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">View all</Typography>
                <ExpandMore fontSize='large' sx={{color:"white"}}/>
                </Link>
        </InnerHero>
    </OuterHero>
  )
}

export default Hero