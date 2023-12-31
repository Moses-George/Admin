import SelectMenu from '../ui/SelectMenu';
import AreaChart from '../charts/AreaChart';
import ChartFilter from '../ui/chartFilter';

const MembersChart = ({ name_1, name_2, data_1, data_2 }) => {
  return (
    <div className="w-full bg-white rounded-md shadow-md glossy">
      <div className="flex  justify-between p-6 gap-y-6">
        <div className="">
          <h1 className="text-slate-800 text-2xl font-semibold border-l-8 pl-2 border-lime-600">
            Members
          </h1>
          <p className="text-slate-600 text-md">mentors and mentees charts demostration</p>
        </div>
        <ChartFilter width="w-28" height="h-10" />
      </div>
      {/* <div className="p-10">
        <p className="text-slate-600 text-lg">Income</p>
        <h1 className="text-slate-800 text-2xl font-bold">$552,700</h1>
      </div> */}
      <div className="w-full h">
        <AreaChart name_1={name_1} name_2={name_2} data_1={data_1} data_2={data_2} />
      </div>
    </div>
  );
};

export default MembersChart;
