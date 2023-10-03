import ReactApexChart from 'react-apexcharts';

const ChartCard = ({ icon, amount, percentage, title }) => {

    const series = [{ name: 'sales', data: [31, 40, 28, 51, 42, 109, 100] }];
    const options = {
      chart: {
        group: 'sparklines',
        type: 'area',
        height: 200,
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
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="space-x-1">
          <span className="text-3xl text-slate-800 font-medium">{amount}</span>
          <span className="text-sm text-[green]">+{percentage}</span>
        </div>
        <div className="p-2 flex w-fit rounded-full bg-amber-100">{icon}</div>
      </div>
      <p className="text-lg text-slate-600 px-4">{title}</p>
      <ReactApexChart series={series} options={options} type="area" height={100} width="100%" />
    </div>
  );
};

export default ChartCard;
