import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import useCreateAllSearchOptions from "../../hooks/useCreateAllSearchOptions"
import { useEffect } from "react"
export const Home = () => {
  const {data} = useGetData(baseUrl + "/venues?_bookings=true")
  const {setAllOptions} = useCreateAllSearchOptions()
  useEffect(() => {
    setAllOptions(data)
  }, [data, setAllOptions])

  //here i need an context for venues, and filtered venues. filtered can be in filter context.....
  return(
    
  <div>
    <Hero venues={data}/>
    {/*<Filters/>*/}
    <AllVenues venues={data}/>
  </div>)

}

