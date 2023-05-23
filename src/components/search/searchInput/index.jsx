import { useContext, useState } from 'react'
import { SearchFilterContext } from '../../../context/searchFilterContext'
import { Autocomplete, TextField } from '@mui/material'

/**
 * if a venue. get bookings based on guests, when using the input field show booked days.
 * if a location, get coordinates, show nearest venues, filter based on guests.
 */
const SearchInput = () => {
const  {allSearchOptions, search, setSearch } = useContext(SearchFilterContext)
 const [ searchInput, setSearchInput] = useState("");
  return (   
    <Autocomplete
    sx={{borderRadius:"30px"}}
    disablePortal
    id="combo-box-demo"
    inputValue={searchInput}
    onInputChange={(event, newInputValue) => {setSearchInput(newInputValue)}}
    value={search}
    onChange={(event, newValue) => {
        setSearch(newValue);
    }}
    options={allSearchOptions}
    isOptionEqualToValue={(option, value) => option.label === value.label}
    renderOption={(props, option) => {
        return(<li{...props}  key={option.id} >{option.label}</li>)
    }}
    renderInput={(params) => <TextField sx={{backgroundColor:"white", borderRadius:"30px"}} className='search' variant="outlined" color="secondary" placeholder="find a venue or search by location" {...params} />}
    /> 
  )
  }
export default SearchInput

/*
value={search}
    onChange={(event, newValue) => {
        setSearch(newValue);
    }}
    inputValue={searchInput}
    onInputChange={(event, newInputValue) => {
      setSearchInput(newInputValue);

      search, setSearch, searchInput, setSearchInput
    }}
*/

