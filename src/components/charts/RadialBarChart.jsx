import ReactApexChart from 'react-apexcharts';
import ProgressBar from '../ProgressBar';
import { getLabelSize } from '../../utils/chartHelpers';

const RadialBarChart = ({ chartData, heading }) => {
  const colorCodes = ['#84cc16', '#fbbf24', '#d97706'];
  const colors = ['bg-lime-500', 'bg-amber-400', 'bg-amber-600'];

  const labels = Array.from(new Set(chartData.map((data) => data['category'])));

  const progressBarData = labels.map((label, index) => {
    const { percentage, labelSize } = getLabelSize(chartData, 'category', label);
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
      height: 350,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: '#e2e8f0'
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (opts) {
              return chartData.length;
            }
          }
        }
      }
    },
    labels: labels,
    colors: colorCodes
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 space-y-8 glossy">
      <h1 className="text-2xl text-slate-800 font-medium">{heading}</h1>
      <h1 className='text-2xl font-medium my-auto mx-auto'>No data yet</h1>
      {/* <ReactApexChart series={series} options={options} type="radialBar" width={300} height={300} />
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
      </div> */}
    </div>
  );
};

export default RadialBarChart;
