import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import { useEffect, useContext, useState } from "react"
import {VenueContext} from "../../context/venueContext"
import Filters from "../../components/filters"
import useCreateAllSearchOptions from "../../hooks/useCreateAllSearchOptions"
export const Home = () => {
  const {setAllOptions} = useCreateAllSearchOptions()
  const [sort, setSort] = useState("nameA")
  const [offset] = useState(0)
  const [sortString, setSortString] = useState("")
  useEffect(() => {
    if(sort === "priceLow"){
      setSortString("&sort=price&sortOrder=asc")
    }
    if(sort === "priceHigh"){
      setSortString("&sort=price&sortOrder=desc")
    }
    if(sort === "nameA"){
      setSortString("&sort=name&sortOrder=asc")
    }
    if(sort === "nameZ"){
      setSortString("&sort=name&sortOrder=desc")
    }
  },[sort])
  const {data} = useGetData(baseUrl + "/venues?_bookings=true" + sortString + "&limit=" + 50 + "&offset=" + offset)
  const {setVenues, filteredVenues} = useContext(VenueContext)

  useEffect(() => {
    setVenues(data)
    setAllOptions(data)
  }, [data, setVenues, setAllOptions])
  

  return(
    
  <div>
    <Hero  venues={filteredVenues}/>
    <Filters sort={sort} setSort={setSort}/>
    <AllVenues venues={filteredVenues}/>
  </div>)

}

