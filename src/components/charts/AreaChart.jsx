import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
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
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:00:30.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z'
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
