import ReactApexChart from "react-apexcharts";

const Doughnut = ({color, label, percentage, width}) => {

  const series = [percentage];

  const options = {
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
