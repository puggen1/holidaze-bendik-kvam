import { geocodingUrl } from "../utils/constants"
const useGetCords = () => {

    const createUrl = (string) => {
        //replace + and space with %20 and %2B
        const formattedString = string.replace(/\s/g, "%20").replace(/\+/g, "%2B")
        const url = `${geocodingUrl}address=${formattedString}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        return url
    }
    return { createUrl }
}


export default useGetCords