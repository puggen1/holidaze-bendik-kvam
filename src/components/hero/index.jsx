import {useState} from 'react'
import { OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions} from './index.styles'
import { Typography , Box} from '@mui/material'
import { ArrowForward, ExpandMore } from '@mui/icons-material'
import { DatePicker } from 'antd'
import Button from '../Button'
import GuestInput from '../input/guestInput'
import SearchInput from '../search/searchInput'
import useGetSearch from '../../hooks/useGetSearch'
import { useNavigate } from 'react-router'
const { RangePicker } = DatePicker;
const Hero = () => {
    const Navigate = useNavigate()
    const {search} = useGetSearch()
    const [guests, setGuest] = useState(1)
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState("")
  return (<form>
    <OuterHero sx={{backgroundImage:"url(/background.jpg)"}}>
        <InnerHero>
            <Typography variant='h1' component="h1" textAlign="center"  fontSize="2.5em" color="white" fontFamily="source sans pro">Plan your next holiday here</Typography>
            <HeroSearch>
                 <SearchInput value={value} setValue={setValue} inputValue={inputValue} setInputValue={setInputValue}/>
            </HeroSearch>
            <HeroDate>
                <Typography className='when' variant="p" component="p" color="white" fontWeight="300" fontSize="1rem" fontFamily="Roboto">When</Typography>
                <RangePicker separator={<ArrowForward sx={{color:"white"}}/>}/>
            </HeroDate>
            <HeroOptions>
                <Button variant="contained" color="secondary" text="Find" event={()=>{search.type === "venue" && Navigate("/venue/" + search.id)}}/>
                <Box className="guests" style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                    <Typography variant="p" component="p" color="white" fontFamily="roboto" fontWeight="300">Number of guests</Typography>
                <GuestInput value={guests} changer={setGuest}/>
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