import { Statistic } from 'antd'
import useGetStat from '../../../hooks/useGetStat'
import currentGuest from '../../../utils/stats/currentGuest'
import totalGuest from '../../../utils/stats/totalGuest'
import CountUp from 'react-countup'
import {OuterGuestStats} from './index.styles'
import { StatCard } from '../index.styles'
const GuestStats = ({bookings}) => {
    const formatter = (value)=> <CountUp end={value} duration={2}/>
    const {stat: currentGuests} = useGetStat(currentGuest,bookings)
    const {stat: totalGuests} = useGetStat(totalGuest,bookings)
  return (
    <OuterGuestStats>
    <StatCard >
        <Statistic
        title="Current Guests"
        value={currentGuests}
        formatter={formatter}
        />
    </StatCard>
    <StatCard>
        <Statistic
        title="Total Guests this month"
        value={totalGuests}
        formatter={formatter}/>
    </StatCard>
    </OuterGuestStats>
  )
}

export default GuestStats