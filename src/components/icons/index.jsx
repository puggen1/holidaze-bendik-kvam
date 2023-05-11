import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import IconSwitch from '../iconSwitch';
import {IconBox} from './index.styles.js'
const Icons = ({pets=false, parking=false, breakfeast=false, wifi=false, type="filter", meta=undefined, changer=undefined}) => {
    if(type === "filter"){
        return(
            <IconBox>
            <IconSwitch outlined="true">
                <WifiIcon />
            </IconSwitch>
            <IconSwitch outlined="true">
                <PetsIcon />
            </IconSwitch>
            <IconSwitch outlined="true">
                <LocalParkingIcon />
            </IconSwitch>
            <IconSwitch outlined="true">
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
            {breakfeast && <BreakfastDiningIcon/>}
            </IconBox>
        )
    }
    if(type === "addEdit"){
        return(<>
            <IconSwitch event={()=>{changer({...meta, wifi: meta.wifi ? false : true})}} checked={meta.wifi} outlined="true">
            <WifiIcon />
            </IconSwitch>
            <IconSwitch event={()=>{changer({...meta, pets: meta.pets ? false : true})}} checked={meta.pets} outlined="true">
            <PetsIcon />
            </IconSwitch>
            <IconSwitch event={()=>{changer({...meta, parking:meta.parking ? false : true})}} checked={meta.parking} outlined="true">
            <LocalParkingIcon />
            </IconSwitch>
            <IconSwitch event={()=>{changer({...meta, breakfast: meta.breakfast ? false : true})}} checked={meta.breakfast} outlined="true">
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