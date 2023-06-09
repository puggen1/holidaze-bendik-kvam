import {useState, useContext, useEffect, useCallback} from 'react'
import { OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions} from './index.styles'
import { Typography , Box, Button as MuiButton} from '@mui/material'
import { ArrowForward, ExpandMore } from '@mui/icons-material'
import { DatePicker } from 'antd'
import Button from '../Button'
import GuestInput from '../input/guestInput'
import SearchInput from '../search/searchInput'
import { useNavigate } from 'react-router'
import {BookingContext} from '../../context/bookingContext'
import useDisabledDates from '../../hooks/useDisabledDates'
import useCheckBooked from '../../hooks/useCheckBooked'
import useGetallBookedDates from '../../hooks/useGetBookedDays'
import useOnCalendarChange from '../../hooks/useOnCalendarChange'
import useAllFilters from '../../hooks/useAllFilters'
import PanelRenderHomePage from '../calendar/panelRenderHomePage'
import Register from '../modal/register'
import useModalToggler from '../../hooks/useModalToggler'
import useSetModalContent from '../../hooks/useSetModalContent'
const { RangePicker } = DatePicker;
const Hero = ({venues}) => {
    const {modalOn} = useModalToggler()
    const {setModal} = useSetModalContent()
    const {filterAllVenues} = useAllFilters()
    const Navigate = useNavigate()
    const {onCalendarChange} = useOnCalendarChange()
    const {guests, setGuests, bookingTime, setBookingTime} = useContext(BookingContext)
    const reset = useCallback(() => {
        setBookingTime([])
    }, [setBookingTime])
    //declaring the searchInput controlled state
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [booked, setBooked] = useState([])
    const {checkBooked} = useCheckBooked()
    const {checkDisabled} = useDisabledDates()
    const noBookings = []
    const {allBookedDates} = useGetallBookedDates(value ? value.bookings : noBookings, guests,value ? value.maxGuests : 1, false, bookingTime)

    const filterVenues = ()=>{
        filterAllVenues(venues)
    }
    const button = <Button event={() =>{value  ? Navigate("/venue/" + value.id): filterVenues()}} text={(value ? "view": "find")} variant="contained" color="secondary"/>

    useEffect(() => {
        setBooked(checkBooked(allBookedDates))
        },[allBookedDates, checkBooked, guests, value, setBooked])

    useEffect(() => {
        if(value === null){
            return
        }
        else{
            if(value.maxGuests < guests){
                setValue(null)
                setGuests(1)
            }
        }
     
    }, [value, guests, setGuests])

    //used on onchange, to update the bookingTime state, also checks if the date is disabled
    const onChange = useCallback((dates, dateStrings) => {
        onCalendarChange(dates, setBookingTime, reset, booked)
      }, [onCalendarChange, setBookingTime, reset, booked]);
      
      //useeffect to update the bookingTime if a date is disabled
      useEffect(() => {
        if(bookingTime === undefined || bookingTime.length === 0 ){
          return
        }
          onChange(bookingTime)
          // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, [booked]);
  return (<form>
    <OuterHero sx={{backgroundImage:"url(/background.jpg)"}}>
        <InnerHero>
            <Typography variant='h1' component="h1" textAlign="center"  fontSize="2.5em" color="white" fontFamily="source sans pro">Plan your next holiday here</Typography>
            <HeroSearch>
                 <SearchInput value={value} setValue={setValue} inputValue={inputValue} setInputValue={setInputValue}/>
            </HeroSearch>
            <HeroDate>
                <Typography className='when' variant="p" component="p" color="white" fontWeight="300" fontSize="1rem" fontFamily="Roboto">When</Typography>
                <RangePicker panelRender={PanelRenderHomePage}  value={bookingTime} onCalendarChange={onChange} disabledDate={(current)=>{return checkDisabled(current, booked)}} separator={<ArrowForward sx={{color:"white"}}/>}/>
            </HeroDate>
            <HeroOptions>
                <a href="#venues">{button}</a>
                <Box className="guests" style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">Number of guests</Typography>
                <GuestInput value={guests} changer={setGuests}/>
                </Box>
            </HeroOptions>
                <Box display="flex"  flexDirection="column" gap="0.5rem">
                    <Typography variant="p" component="p" textAlign="center" color="white" fontFamily="roboto" fontWeight="300">Or</Typography>
                    <MuiButton onClick={(e)=>{e.preventDefault();modalOn(); setModal(<Register/>)}} type='text'><Typography variant="p" component="p" textAlign="center" color="white" fontFamily="roboto" fontWeight="300">Become an VenueManager</Typography></MuiButton>
                </Box>
                <a href="#venues" style={{textDecoration:"none",display:"flex", flexDirection:"column", alignItems:"center", margin:"auto 0 0 0"}}>
                <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">View all</Typography>
                <ExpandMore fontSize='large' sx={{color:"white"}}/>
                </a>
        </InnerHero>
    </OuterHero>
    </form>
  )
}

export default Hero