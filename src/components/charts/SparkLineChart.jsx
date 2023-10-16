import ReactApexChart from "react-apexcharts";


const SparkLineChart = () => {

  const series = [{data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]}];

  const options = {
    chart: {
    //   id: 'spark1',
      group: 'sparks',
    //   type: 'line',
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
    colors: ["#84cc16"],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  };

  return <ReactApexChart series={series} options={options} type="line" width={"100%"} height={100} />
};

export default SparkLineChart;
