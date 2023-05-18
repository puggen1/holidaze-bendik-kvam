import { useEffect, useState } from "react"
import { geocodingUrl } from "../utils/constants"
import {useGetData} from "./useGetData"
const useGetCords = (input) => {
    const [string, setString] = useState(input)
    const [coords, setCoords] = useState({ lat: 0, lng: 0 })
    const {data, isError, isLoading} = useGetData(geocodingUrl + string + "&key=" + process.env.REACT_APP_API_KEY)
    
    useEffect(() => {
        if (data) {
            setCoords({ lat: data[0].lat, lng: data[0].lon })
        }
    }   , [data])

    return {coords}
}


export default useGetCords