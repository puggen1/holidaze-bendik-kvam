import Hero from "../../components/hero"
import Filters from "../../components/filters"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
export const Home = () => {
  const {data, isLoading, isError} = useGetData(baseUrl + "/venues")
  return(
  <div>
    <Hero/>
    {/*<Filters/>*/}
    <AllVenues venues={data}/>
  </div>)

}

