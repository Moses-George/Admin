import SelectMenu from '../ui/SelectMenu';
import AreaChart from '../charts/AreaChart';

const Revenue = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-md glossy">
      <div className="flex  justify-between p-6 gap-y-6">
        <div className="">
          <h1 className="text-slate-800 text-2xl font-semibold border-l-8 pl-2 border-lime-600">
            Revenue
          </h1>
          <p className="text-slate-600 text-md">Lorem, ipsum dolor.</p>
        </div>
        <SelectMenu />
      </div>
      <div className="p-10">
        <p className="text-slate-600 text-lg">Income</p>
        <h1 className="text-slate-800 text-2xl font-bold">$552,700</h1>
      </div>
      <div className="w-full h">
        <AreaChart />
      </div>
    </div>
  );
};

export default Revenue;
