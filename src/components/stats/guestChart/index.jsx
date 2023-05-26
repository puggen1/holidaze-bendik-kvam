import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import "chart.js/auto"
import createChartData from '../../../utils/createChartData';
import { useEffect, useState } from 'react';
import { useTheme, Box } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);
const GuestChart = ({bookings}) => {
  const theme = useTheme()
 const [chartData, setChartData] = useState([])
    useEffect(() => {
      if(bookings){
        setChartData(createChartData(bookings))
      }
    }, [bookings])
  const data = {
    labels: chartData.map(data=>{ console.log(data);return new Date(data.date).getDate()}),
    datasets: [
      {
        type: 'line',
        label: 'Guests',
        data: chartData.map(data=>{return data.guests}),
        borderWidth: 5,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderJoinStyle: 'round',
        pointRadius: 2,
  
      },
    ],
  };
  
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    
    },
    elements: {
      line: {
        tension: 0,
      },
    },
  };
  return (
    <Box className="chart" maxWidth="100%" width="100%" gridColumn="2/4" margin="0 auto">
    <Chart
    style={{maxWidth:"100%", width:"100%"}}
    data={data}
    options={options}
  />
  </Box>
  )
}

export default GuestChart