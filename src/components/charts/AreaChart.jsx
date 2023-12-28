import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const series = [
    {
      name: 'Revenue',
      data: [31, 40, 28, 51, 42, 109, 100, 38, 44, 38, 39, 4]
    },
    {
      name: 'Income',
      data: [11, 32, 45, 32, 34, 52, 41, 44, 57, 49, 49, 30]
    }
  ];

  const options = {
    chart: {
      width: 500,
      height: 350,
      type: 'area',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.2,
        color: '#94a3b8'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
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
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#84cc16', '#fbbf24']
  };

  return (
    <ReactApexChart options={options} series={series} type="area" width={'100%'} height={400} />
  );
};

export default AreaChart;
