import ReactApexChart from 'react-apexcharts';

const SparkAreaChart = () => {
  const series = [{ name: 'sales', data: [31, 40, 28, 51, 42, 109, 100] }];
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
    colors: ['#84cc16']
  };

  return (
    <ReactApexChart series={series} options={options} type="area" width={'100%'} height={100} />
  );
};

export default SparkAreaChart;
