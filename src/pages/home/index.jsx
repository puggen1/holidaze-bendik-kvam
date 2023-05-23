import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import useCreateAllSearchOptions from "../../hooks/useCreateAllSearchOptions"
import { useEffect } from "react"
export const Home = () => {
  const {data} = useGetData(baseUrl + "/venues")
  const {setAllOptions} = useCreateAllSearchOptions()
  useEffect(() => {
    setAllOptions(data)
  }, [data, setAllOptions])
  return(
    
  <div>
    <Hero/>
    {/*<Filters/>*/}
    <AllVenues venues={data}/>
  </div>)

}

