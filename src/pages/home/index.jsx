import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import { useEffect, useContext } from "react"
import {VenueContext} from "../../context/venueContext"
import Filters from "../../components/filters"
export const Home = () => {
  const {data} = useGetData(baseUrl + "/venues?_bookings=true")
  const {setVenues, filteredVenues} = useContext(VenueContext)
  useEffect(() => {
    setVenues(data)
  }, [data, setVenues])
  //here i need an context for venues, and filtered venues. filtered can be in filter context.....
  return(
    
  <div>
    <Hero />
    <Filters/>
    <AllVenues venues={filteredVenues}/>
  </div>)

}

