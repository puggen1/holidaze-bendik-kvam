import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import IconSwitch from '../iconSwitch';
import {IconBox} from './index.styles.js'
const Icons = ({pets=false, parking=false, breakfeast=false, wifi=false, type="filter"}) => {
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
  return (
    <div>Icons</div>
  )
}

export default Icons