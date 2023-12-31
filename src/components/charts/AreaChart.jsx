import ReactApexChart from 'react-apexcharts';

const AreaChart = ({ name_1, name_2, data_1, data_2 }) => {
  const series = [
    {
      name: name_1,
      data: data_1
    },
    {
      name: name_2,
      data: data_2
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
