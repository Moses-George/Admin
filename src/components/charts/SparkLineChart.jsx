import ReactApexChart from 'react-apexcharts';

const SparkLineChart = ({ name, }) => {
  const series = [{ name: name, data: [31, 40, 28, 51, 42, 109, 100, 10, 27, 18, 17, 18] }];

  const options = {
    chart: {
      group: 'sparks',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2
      }
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 10
      }
    },
    markers: {
      size: 0
    },
    colors: ['#84cc16'],
    yaxis: {
      show: false,
      min: 0
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
      // x: {
      //   show: false
      // },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  };

  return (
    <ReactApexChart series={series} options={options} type="line" width={'100%'} height={100} />
  );
};

export default SparkLineChart;
