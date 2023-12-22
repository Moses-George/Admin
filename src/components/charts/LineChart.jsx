import ReactApexChart from 'react-apexcharts';
import SelectMenu from '../ui/SelectMenu';

const LineChart = () => {
  const series = [
    {
      name: 'Music',
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: 'Photos',
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: 'Files',
      data: [0, 39, 52, 11, 29, 43]
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
      text: 'Media',
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
    labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
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
        <h1 className="text-2xl text-slate-800 font-medium w-full">Line chart</h1>
        <SelectMenu />
      </div>
      <ReactApexChart options={options} series={series} width={'100%'} height={450} />
    </div>
  );
};

export default LineChart;
