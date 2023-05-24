import React, { useEffect, useState } from 'react'
import {OuterFilters, Ranges, SortSearch} from './index.styles'
import Icons from '../icons'
import RangeInput from '../input/rangeInput'
import { Box, Typography } from '@mui/material'
import DefaultInput from '../input/defaultInput'
import OuterFilterAccordion from './accordion'
import { useContext } from 'react'
import { VenueContext } from '../../context/venueContext'
import getRange from '../../utils/getPriceRange'
import Button from '../Button'
import useAllFilters from '../../hooks/useAllFilters'
const Filters = () => {
   
    const width = window.innerWidth

  return (
    <>
    {width > 700 ?
    <OuterFilters>
        <InnerFilters/>
    </OuterFilters>
    :
    <OuterFilterAccordion>
        <InnerFilters/>
    </OuterFilterAccordion>
    }
    </>
    )
}

const InnerFilters = () => {
    const {venues, setFilter, filter, setFilteredVenues} = useContext(VenueContext)
    const {filterVenues, reset} = useAllFilters()


    //priceRange
    const [minMaxRange, setMinMaxRange] = useState([0, 100000])
    useEffect(() => {
            setMinMaxRange(getRange(venues, "price"))
    }, [venues])
//the state for the price range input
    const [priceRange, setPriceRange] = useState([0, 100000])
    const initiateFilter = () => {
        filterVenues(venues)
    }


//guestRange
const [minMaxGuests, setMinMaxGuests] = useState([1, 100]);
useEffect(() => {
    setMinMaxGuests(getRange(venues, "maxGuests"))
}, [venues])
//the state for the guest range input
const [guestRange, setGuestRange] = useState([1, 100])


//useEffect to update filters: 
useEffect(() => {
    setFilter(prev => ({...prev, priceRange: [priceRange[0], priceRange[1]], guestRange: [guestRange[0], guestRange[1]]}))
}, [priceRange, guestRange, setFilter])
    return(
        <>
        <Icons type="filter" />
        <Ranges>
        <Box>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Price</Typography>
        <RangeInput start={minMaxRange[0]} end={minMaxRange[1]} range={priceRange} setRange={setPriceRange}/>
        </Box>
        <Box>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Guests</Typography>
        <RangeInput start={minMaxGuests[0]} end={minMaxGuests[1]} range={guestRange} setRange={setGuestRange}/>
        </Box>
        </Ranges>
        <SortSearch>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Sort</Typography>
        {/*dropdown here*/}
        <DefaultInput variant="outlined"  placeholder="temp placeholder for dropdown"/>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Search</Typography>
        <DefaultInput variant="outlined"  placeholder="Search for a venue or a place"/>
        </SortSearch>
        <Box>
        <Button text="Filter" variant="contained" color="secondary" event={()=>{initiateFilter()}}/>
        <Button text="Reset" variant="outlined" color="secondary" event={()=>{reset(); setPriceRange([0, 100000]); setGuestRange([1, 100])}}/>
        </Box>
        </>
    )
}
export default Filters