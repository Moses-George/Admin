import ReactApexChart from 'react-apexcharts';

const JobsCategoryChart = () => {
  
  const series = [42, 47, 52];

  const options = {
    chart: {
      type: 'polarArea'
    },
    labels: ['Remote', 'On-site', 'Hybrid'],
    colors: ['#84cc16', '#fbbf24', '#d97706'],
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

  const jobCategories = [
    {
      id: 'j1',
      category: 'Remote',
      percentage: 40,
      bgColor: 'bg-lime-500'
    },
    {
      id: 'j1',
      category: 'On-Site',
      percentage: 40,
      bgColor: 'bg-amber-400'
    },
    {
      id: 'j1',
      category: 'Hybrid',
      percentage: 40,
      bgColor: 'bg-amber-600'
    }
  ];

  return (
    <div className="bg-white rounded-md shadow-md p-6 w-full space-y-8 h-fit">
      <h1 className="font-medium text-slate-800 text-xl">Jobs Category</h1>
      <div className="">
        <ReactApexChart options={options} series={series} type="polarArea" width="100%" />
      </div>
      <div className="w-full space-y-4">
        {jobCategories.map((jobCategory) => (
          <div className="w-full space-y-3">
            <div className="flex justify-between font-medium">
              <span className="text-slate-800">{`${jobCategory.category}(${jobCategory.percentage}%)`}</span>
              <span className="text-slate-600 text-end">25</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-md ">
              {' '}
              <div className={`w-4/5 ${jobCategory.bgColor} h-2 rounded-md`}></div>{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCategoryChart;
