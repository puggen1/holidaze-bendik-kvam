import React from 'react'
import {OuterFilters, Ranges, SortSearch} from './index.styles'
import Icons from '../icons'
import RangeInput from '../input/rangeInput'
import { Box, Typography } from '@mui/material'
import DefaultInput from '../input/defaultInput'
import OuterFilterAccordion from './accordion'
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
    return(
        <>
        <Icons type="filter"/>
        <Ranges>
        <Box>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Price</Typography>
        <RangeInput start={100} end={500}/>
        </Box>
        <Box>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Guests</Typography>
        <RangeInput start={100} end={500}/>
        </Box>
        </Ranges>
        <SortSearch>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Sort</Typography>
        {/*dropdown here*/}
        <DefaultInput variant="outlined"  placeholder="temp placeholder for dropdown"/>
        <Typography variant='p' component='p' color='white' fontWeight='300' fontSize='1rem' fontFamily='Roboto'>Search</Typography>
        <DefaultInput variant="outlined"  placeholder="Search for a venue or a place"/>
        </SortSearch>
        </>
    )
}
export default Filters