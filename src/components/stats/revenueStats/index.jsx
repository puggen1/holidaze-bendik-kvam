import { Card, Statistic } from 'antd'
import React from 'react'
import CountUp from 'react-countup'
import useGetStat from '../../../hooks/useGetStat'
import totalRevenue from '../../../utils/stats/totalRevenue'
import { OuterRevenueStats } from './index.styles'
const RevenueStats = ({bookings}) => {
    const formatter = (value)=> <CountUp end={value} duration={2}/>
    const {stat: totalRevenueThisMonth} = useGetStat(totalRevenue, bookings)
    return (
    <OuterRevenueStats>
    <Card>
        <Statistic
        title="Total Revenue so far this month"
        formatter={formatter}
        value={totalRevenueThisMonth}
        />
    </Card>
    </OuterRevenueStats>
  )
}

export default RevenueStats