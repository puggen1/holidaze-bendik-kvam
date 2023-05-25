import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const GuestChart = ({bookings}) => {
  return (
    <Chart
    data={{
      labels: ['Jun', 'Jul', 'Aug'],
      datasets: [
        {
          id: 1,
          label: '',
          data: [5, 6, 7],
        },
        {
          id: 2,
          label: '',
          data: [3, 2, 1],
        },
      ],
    }}
  />
  )
}

export default GuestChart