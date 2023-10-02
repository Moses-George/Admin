import AdminLayout from '../components/layout/AdminLayout';
// import { ApexCharts } from "apexcharts";

const Dashboard = () => {

  // const series = [{ name: 'sales', data: [31, 40, 28, 51, 42, 109, 100] }];
  // const options = {
  //     chart: {
  //         group: 'sparklines',
  //         type: 'area',
  //         height: 160,
  //         sparkline: {
  //             enabled: true
  //         },
  //     },
  //     stroke: {
  //         curve: 'straight'
  //     },
  //     fill: {
  //         opacity: 1,
  //     },
  //     yaxis: {
  //         min: 0,
  //         show: false
  //     },
  //     xaxis: {
  //         type: 'datetime',
  //         categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:00:30.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  //     },
  //     colors: ['#DA0463']
  //     // series: 
  // }


  return (
    <AdminLayout>
      <section className="mx-6 space-y-6">
        {/* <div className="flex flex-wrap gap-x-6">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <div className="space-x-1">
                <span className="text-3xl text-dark-gray font-medium">56</span>
                <span className="text-sm text-[green]">+4%</span>
              </div>
              <BsCup className="text-3xl text-dark-peach" />
            </div>
            <p className="text-xl text-medium-gray px-4">Menus</p>
            <ApexCharts series={series} options={options} type="area" height={80} width="100%" />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <div className="space-x-1">
                <span className="text-3xl text-dark-gray font-medium">56</span>
                <span className="text-sm text-[green]">+4%</span>
              </div>
              <BsCup className="text-3xl text-dark-peach" />
            </div>
            <p className="text-xl text-medium-gray px-4">Orders</p>
            <ApexCharts series={series} options={options} type="area" height={80} width="100%" />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4">
              <div className="space-x-1">
                <span className="text-3xl text-dark-gray font-medium">56</span>
                <span className="text-sm text-[green]">+4%</span>
              </div>
              <BsCup className="text-3xl text-dark-peach" />
            </div>
            <p className="text-xl text-medium-gray px-4">Income</p>
            <ApexCharts series={series} options={options} type="area" height={80} width="100%" />
          </div>
        </div> */}
      </section>
    </AdminLayout>
  );
};

export default Dashboard;
