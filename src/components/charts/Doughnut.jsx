import ReactApexChart from 'react-apexcharts';

const Doughnut = ({ color, label, percentage, width }) => {
  const series = [percentage];

  const options = {
    chart: {
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: '#cbd5e1'
      }
    },
    labels: [label],
    legend: {
      show: false
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontWeight: '700',
            fontSize: '22px'
          }
        }
      }
    },
    colors: [color]
  };

  return <ReactApexChart series={series} options={options} type="radialBar" width={width} />;
};

export default Doughnut;
