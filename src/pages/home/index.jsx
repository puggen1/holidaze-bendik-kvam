import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import { useEffect, useContext, useState } from "react"
import {VenueContext} from "../../context/venueContext"
import Filters from "../../components/filters"
import useCreateAllSearchOptions from "../../hooks/useCreateAllSearchOptions"
import useSetOffset from "../../hooks/useSetOffset"
import HomePage from "./index.styles"
export const Home = () => {
  const {setAllOptions} = useCreateAllSearchOptions()
  const [sort, setSort] = useState("nameA")
  const [offset, setOffset] = useState(0)
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
    setOffset(0)
  },[sort])
  const {data, isLoading, isError} = useGetData(baseUrl + "/venues?_bookings=true" + sortString + "&limit=" + 52 + "&offset=" + offset)
  const {setVenues, filteredVenues} = useContext(VenueContext)

  const {prev, next} = useSetOffset(offset, data, setOffset)

  useEffect(() => {
    setVenues(data)
    setAllOptions(data)
  }, [data, setVenues, setAllOptions])
  return(
    
  <HomePage>
    <Hero venues={filteredVenues}/>
    <Filters sort={sort} setSort={setSort}/>
    <AllVenues next={next} prev={prev} venues={filteredVenues} loading={isLoading} error={isError}/>
  </HomePage>)

}

