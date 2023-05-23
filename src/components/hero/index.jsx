import {useState, useContext, useEffect} from 'react'
import { OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions} from './index.styles'
import { Typography , Box} from '@mui/material'
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
const { RangePicker } = DatePicker;
const Hero = () => {
  
    const Navigate = useNavigate()
    const {onCalendarChange} = useOnCalendarChange()
    const {guests, setGuests, bookingTime, setBookingTime} = useContext(BookingContext)
    const reset = () => {
        setBookingTime([])
    }
    //declaring the searchInput controlled state
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [booked, setBooked] = useState([])
    const {checkBooked} = useCheckBooked()
    const {checkDisabled} = useDisabledDates()
    const {allBookedDates} = useGetallBookedDates(value ? value.bookings: [], guests, value ? value.maxGuests : 1)
    useEffect(() => {
        setBooked(checkBooked(allBookedDates))
        },[allBookedDates, setBooked, checkBooked])
    useEffect(() => {
        if(value === null){
            return
        }
        if(value.type === "venue"){
            if(value.maxGuests < guests){
                setGuests(value.maxGuests)
            }
        }
        else{
        }
    }, [value, guests, setGuests])

    const onChange = (dates, dateStrings) => {
        onCalendarChange(dates, setBookingTime, reset, booked)
      };
      useEffect(() => {
        if(bookingTime === undefined || bookingTime.length === 0 ){
          return
        }
          onChange(bookingTime)
          // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, [booked, onChange ]);
  return (<form>
    <OuterHero sx={{backgroundImage:"url(/background.jpg)"}}>
        <InnerHero>
            <Typography variant='h1' component="h1" textAlign="center"  fontSize="2.5em" color="white" fontFamily="source sans pro">Plan your next holiday here</Typography>
            <HeroSearch>
                 <SearchInput value={value} setValue={setValue} inputValue={inputValue} setInputValue={setInputValue}/>
            </HeroSearch>
            <HeroDate>
                <Typography className='when' variant="p" component="p" color="white" fontWeight="300" fontSize="1rem" fontFamily="Roboto">When</Typography>
                <RangePicker  value={bookingTime} onCalendarChange={onChange} disabledDate={(current)=>{return checkDisabled(current, booked)}} separator={<ArrowForward sx={{color:"white"}}/>}/>
            </HeroDate>
            <HeroOptions>
                <Button variant="contained" color="secondary" text="Find" event={()=>{(value.type && value.type === "venue") && Navigate("/venue/" + value.id)}}/>
                <Box className="guests" style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">Number of guests</Typography>
                <GuestInput value={guests} changer={setGuests}/>
                </Box>
            </HeroOptions>
                <a href="#venues" style={{textDecoration:"none",display:"flex", flexDirection:"column", alignItems:"center", margin:"auto 0 2rem 0"}}>
                <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">View all</Typography>
                <ExpandMore fontSize='large' sx={{color:"white"}}/>
                </a>
        </InnerHero>
    </OuterHero>
    </form>
  )
}

export default Hero