import { useContext } from 'react'
import { SearchFilterContext } from '../../../context/searchFilterContext'
import { Autocomplete, TextField, Typography } from '@mui/material'

/**
 * if a venue. get bookings based on guests, when using the input field show booked days.
 * if a location, get coordinates, show nearest venues, filter based on guests.
 */
const SearchInput = ({value, setValue, inputValue, setInputValue}) => {
const  {allSearchOptions} = useContext(SearchFilterContext)
  return (   
    <Autocomplete
    sx={{borderRadius:"30px"}}
    disablePortal
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {setInputValue(newInputValue)}}
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    options={allSearchOptions}
    isOptionEqualToValue={(option, value) => option.label === value.label}
    renderOption={(props, option) => {
        return(<li{...props}  style={{display:"flex", justifyContent:"space-between"}} key={option.id}><Typography>{option.label}</Typography><Typography>{option.type}</Typography></li>)
    }}
    renderInput={(params) => <TextField sx={{backgroundColor:"white", borderRadius:"30px"}} className='search' variant="outlined" color="secondary" placeholder="search for a venue" {...params} />}
    /> 
  )
  }
export default SearchInput
