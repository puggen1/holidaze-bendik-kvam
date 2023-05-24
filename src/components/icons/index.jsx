import {useContext} from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import IconSwitch from '../iconSwitch';
import {IconBox} from './index.styles.js'
import { VenueContext } from '../../context/venueContext';
const Icons = ({pets=false, parking=false, breakfast=false, wifi=false, type="filter", meta=undefined, changer=undefined, manager=undefined}) => {
    const {toggleWifi, togglePets, toggleParking, toggleBreakfast, filter} = useContext(VenueContext)
    if(type === "filter"){
        return(
            <IconBox>
            <IconSwitch outlined="true" event={toggleWifi} checked={filter.meta.wifi}>
                <WifiIcon />
            </IconSwitch>
            <IconSwitch outlined="true" event={togglePets} checked={filter.meta.pets}>
                <PetsIcon />
            </IconSwitch>
            <IconSwitch outlined="true" event={toggleParking} checked={filter.meta.parking}>
                <LocalParkingIcon />
            </IconSwitch>
            <IconSwitch outlined="true" event={toggleBreakfast} checked={filter.meta.breakfast}>
                <BreakfastDiningIcon />
            </IconSwitch>
            </IconBox>
        )
    }
    if(type ==="card"){
        return(
            <IconBox className='icons'>
            {wifi && <WifiIcon/>}
            {pets && <PetsIcon/>}
            {parking && <LocalParkingIcon/>}
            {breakfast && <BreakfastDiningIcon/>}
            </IconBox>
        )
    }
    if(type === "addEdit"){
        return(<>
            <IconSwitch key={0} event={()=>{changer({...meta, wifi: !meta.wifi})}} checked={meta.wifi} outlined="true">
            <WifiIcon />
            </IconSwitch>
            <IconSwitch key={1} event={()=>{changer({...meta, pets: !meta.pets})}} checked={meta.pets} outlined="true">
            <PetsIcon />
            </IconSwitch>
            <IconSwitch key={3} event={()=>{changer({...meta, parking:!meta.parking})}} checked={meta.parking} outlined="true">
            <LocalParkingIcon />
            </IconSwitch>
            <IconSwitch key={4} event={()=>{changer({...meta, breakfast: !meta.breakfast})}} checked={meta.breakfast} outlined="true">
            <BreakfastDiningIcon />
            </IconSwitch>
        </>
        )
    }
  return (
    <div>Icons</div>
  )
}

export default Icons
