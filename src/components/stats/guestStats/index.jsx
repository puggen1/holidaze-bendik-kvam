import { Card, Statistic } from 'antd'
import { useEffect, useState } from 'react'
import { useGetData } from '../../../hooks/useGetData'
import { baseUrl } from '../../../utils/constants'
import useGetUserInfo from '../../../hooks/useGetUserInfo'
import useGetStat from '../../../hooks/useGetStat'
import currentGuest from '../../../utils/stats/currentGuest'
import totalGuest from '../../../utils/stats/totalGuest'
import CountUp from 'react-countup'
const GuestStats = ({venues}) => {
    const auth = useGetUserInfo("accessToken")
    const [allBookings, setAllBookings] = useState([])
    const [url, setUrl] = useState("")
    let {data} = useGetData(url, auth)
    const formatter = (value)=> <CountUp end={value} duration={2}/>

    useEffect(() => {
        for(let venue of venues){
            setUrl(baseUrl + "/venues/" + venue.id + "?_bookings=true")
        }
    },[venues]);
    useEffect(() => {
        if(Object.keys(data).length > 0){
            setAllBookings((prev)=>{return [...prev, ...data.bookings]})
        }
    }, [data])
    const {currentGuests} = useGetStat(currentGuest,allBookings)
    const {totalGuests} = useGetStat(totalGuest,allBookings, true)
  return (
    <>
    <Card>
        <Statistic
        title="Current Guests"
        value={currentGuests}
        formatter={formatter}
        />
    </Card>
    <Card>
        <Statistic
        title="Total Guests this month"
        value={totalGuests}
        formatter={formatter}/>
    </Card>
    </>
  )
}

export default GuestStats