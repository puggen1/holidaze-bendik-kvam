import React from 'react'
import { OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions} from './index.styles'
import { Typography } from '@mui/material'
import DefaultInput from '../input/defaultInput'
import { ArrowForward, Search } from '@mui/icons-material'
import { DatePicker } from 'antd'
import Button from '../Button'
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
            </HeroOptions>
        </InnerHero>
    </OuterHero>
  )
}

export default Hero