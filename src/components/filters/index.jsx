import React, { useEffect, useState } from 'react'
import {OuterFilters, Ranges, SortSearch} from './index.styles'
import Icons from '../icons'
import RangeInput from '../input/rangeInput'
import { Box, Select, Typography, MenuItem } from '@mui/material'
import DefaultInput from '../input/defaultInput'
import OuterFilterAccordion from './accordion'
import { useContext } from 'react'
import { VenueContext } from '../../context/venueContext'
import ScreenContext from '../../context/screencontext'
import Button from '../Button'
import useAllFilters from '../../hooks/useAllFilters'
import { DatePicker } from 'antd'
import useOnCalendarChange from '../../hooks/useOnCalendarChange'
import { BookingContext } from '../../context/bookingContext'
import useDisabledDates from '../../hooks/useDisabledDates'
import PanelRenderHomePage from '../calendar/panelRenderHomePage'
const Filters = ({sort, setSort}) => {
   const {width} = useContext(ScreenContext)
  return (
    <>
    {width > 700 ?
    <OuterFilters>
        <InnerFilters sort={sort} setSort={setSort}/>
    </OuterFilters>
    :
    <OuterFilterAccordion>
        <InnerFilters sort={sort} setSort={setSort}/>
    </OuterFilterAccordion>
    }
    </>
    )
}
const InnerFilters = ({sort, setSort}) => {
    const [searchValue, setSearchValue] = useState(""); 
    const {checkDisabled} = useDisabledDates()
    const {onCalendarChange} = useOnCalendarChange()
    const { RangePicker } = DatePicker;
    const {venues, setFilter} = useContext(VenueContext)
    const {bookingTime, setBookingTime} = useContext(BookingContext);
    const {filterAllVenues, reset, filterBySearch} = useAllFilters()


    //priceRange
    const [minMaxRange] = useState([0, 100000])
//the state for the price range input
    const [priceRange, setPriceRange] = useState([0, 100000])
    const initiateFilter = () => {
        filterAllVenues(venues)
    }


//guestRange
const [minMaxGuests] = useState([1, 100]);
//the state for the guest range input
const [guestRange, setGuestRange] = useState([1, 100])

const sortBy = (e) => {
    setSort(e.target.value)
}
const resetRange = () => {
    setBookingTime([])
}
const search = (e) => {
    setSearchValue(e)
    filterBySearch(e)

}
//useEffect to update filters: 
useEffect(() => {
    setFilter(prev => ({...prev, priceRange: [priceRange[0], priceRange[1]], guestRange: [guestRange[0], guestRange[1]]}))
}, [priceRange, guestRange, setFilter])
    return(
        <>
        <Icons type="filter" />
        <Ranges>
        <Box className="price">
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Price</Typography>
        <RangeInput start={minMaxRange[0]} end={minMaxRange[1]} range={priceRange} setRange={setPriceRange}/>
        </Box>
        <Box className="guests">
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Guests</Typography>
        <RangeInput  start={minMaxGuests[0]} end={minMaxGuests[1]} range={guestRange} setRange={setGuestRange}/>
        </Box>
        </Ranges>
        <Box display="flex" justifyContent="center" className="rangeBox">
        <RangePicker panelRender={PanelRenderHomePage} className='filterRange'  value={bookingTime} disabledDate={(current)=>{return checkDisabled(current, [])}} onCalendarChange={(dates)=>{onCalendarChange(dates,setBookingTime,resetRange,[])}} />
        </Box>
        <SortSearch>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Sort</Typography>
       <Select
        variant="outlined"
        sx={{backgroundColor: "white", borderRadius: "30px"}}
        value={sort}
        label="Sort by"
        onChange={sortBy}
       >
        <MenuItem value={"priceLow"}>Price low to high</MenuItem>
        <MenuItem value={"priceHigh"}>Price hight to low</MenuItem>
        <MenuItem value={"nameA"}>Name A to Z</MenuItem>
        <MenuItem value={"nameZ"}>Name Z to A</MenuItem>
       </Select>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Search</Typography>
        <DefaultInput variant="outlined" value={searchValue} event={search} placeholder="Search for a venue or a place"/>
        </SortSearch>
        <Box className="actions">
        <Button text="Reset" variant="outlined" color="secondary" event={()=>{reset(); setPriceRange([0, 100000]); setGuestRange([1, 100])}}/>
        <Button text="Filter" variant="contained" color="secondary" event={()=>{initiateFilter()}}/>
        </Box>
        </>
    )
}
export default Filters