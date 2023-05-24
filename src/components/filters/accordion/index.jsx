import {AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { FilterAccordion, AccordionDetails } from './index.styles';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
const OuterFilterAccordion = ({children}) => {
  return (
   <FilterAccordion>
    <AccordionSummary
          expandIcon={<KeyboardDoubleArrowDown sx={{color:"white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography>Filters</Typography>
        </AccordionSummary>
    <AccordionDetails>
    {children}
    </AccordionDetails>
   </FilterAccordion>
  )
}

export default OuterFilterAccordion