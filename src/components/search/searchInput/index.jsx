import { useContext } from 'react'
import { SearchFilterContext } from '../../../context/searchFilterContext'
import { Autocomplete, TextField } from '@mui/material'
const SearchInput = () => {
    const  {allSearchOptions} = useContext(SearchFilterContext)
    
  return (
   
    <Autocomplete
    sx={{borderRadius:"30px"}}
    disablePortal
    id="combo-box-demo"
    
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