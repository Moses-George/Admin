import ReactApexChart from 'react-apexcharts';
import ProgressBar from '../ProgressBar';
import { getLabelSize } from '../../utils/helpers';

const PolarAreaChart = ({ heading, chartData }) => {
  const colorsCode = ['#84cc16', '#fbbf24', '#d97706'];
  const colors = ['bg-lime-500', 'bg-amber-400', 'bg-amber-600'];

  const labels = Array.from(new Set(chartData.map((data) => data['category'])));

  const progressBarData = labels.map((label, index) => {
    const { labelSize, percentage } = getLabelSize(chartData, 'category', label);
    return {
      id: Math.random(),
      label: label,
      percentage: percentage,
      labelSize: labelSize,
      bgColor: colors[index]
    };
  });

  const series = progressBarData.map((data) => data.percentage);

  const options = {
    chart: {
      type: 'polarArea',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: '#f1f5f9'
      }
    },
    labels: labels,
    colors: colorsCode,
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false,
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 w-full space-y-8 glossy">
      <h1 className="font-medium text-slate-800 text-xl">{heading}</h1>
      <div className="">
        <ReactApexChart options={options} series={series} type="polarArea" width="100%" />
      </div>
      <div className="w-full space-y-4">
        {progressBarData.map((data) => {
          const { id, label, bgColor, percentage, labelSize } = data;
          return (
            <ProgressBar
              key={id}
              label={label}
              percentage={percentage}
              bgColorClass={bgColor}
              labelSize={labelSize}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PolarAreaChart;
