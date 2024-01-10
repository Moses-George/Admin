import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SparkAreaChart = ({ name, data }) => {
  const [chartData, setChartData] = useState([]);
  const series = [{ name: name, data: chartData }];
  const options = {
    chart: {
      group: 'sparklines',
      type: 'area',
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      min: 0,
      show: false
    },
    xaxis: {
      type: 'months',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    colors: ['#84cc16']
  };

  useEffect(() => {
    setChartData(data);
  }, [data, chartData]);

  return (
    <ReactApexChart series={series} options={options} type="area" width={'100%'} height={100} />
  );
};

export default SparkAreaChart;
