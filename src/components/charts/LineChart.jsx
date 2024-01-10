import ReactApexChart from 'react-apexcharts';
import SelectMenu from '../ui/SelectMenu';
import { months } from '../../utils/chartHelpers';
import ChartFilter from '../ui/ChartFilter';

const LineChart = ({ name_1, name_2, name_3, data_1, data_2, data_3 }) => {
  const series = [
    {
      name: name_1,
      data: data_1
    },
    {
      name: name_2,
      data: data_2
    },
    {
      name: name_3,
      data: data_3
    }
  ];

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: '#94a3b8'
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: ['#84cc16', '#2196F3', '#f59e0b'],
    title: {
      text: 'chart',
      align: 'left',
      offsetY: 25,
      offsetX: 20
    },
    subtitle: {
      text: 'Statistics',
      offsetY: 0,
      offsetX: 20
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9
      }
    },
    grid: {
      show: true,
      padding: {
        bottom: 0
      }
    },
    labels: months,
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'right',
      offsetY: 10
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md glossy space-y-8">
      <div className="flex p-6 w-full">
        <h1 className="text-2xl text-slate-800 font-medium w-full">Members and Subscriptions</h1>
        <ChartFilter width="w-28" height="h-10" />
      </div>
      <ReactApexChart options={options} series={series} width={'100%'} height={450} />
    </div>
  );
};

export default LineChart;
