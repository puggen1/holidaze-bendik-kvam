import Hero from "../../components/hero"
import AllVenues from "../../components/venue/allVenues"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
export const Home = () => {
  const {data} = useGetData(baseUrl + "/venues")
  return(
  <div>
    <Hero/>
    {/*<Filters/>*/}
    <AllVenues venues={data}/>
  </div>)

}

