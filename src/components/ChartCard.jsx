import { accountCreatedDate } from '../utils/helpers';

const ChartCard = ({ icon, chart, amount, title, loading, data, years, onChange, value }) => {
  const selectField = (
    <div className="relative">
      <select
        required
        className="self-end block appearance-none  w-20 bg-lime-100 border border-gray-200 text-gray-700 py-1 px-3 rounded leading-tight focus:bg-white focus:ring-4 focus:outline-none focus:ring-lime-300 focus:bg-white"
        id="chart"
        onChange={onChange}
        value={value}
        name="chart">
        <option className="font-bold" disabled>
          Year
        </option>
        {years?.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </select>
    </div>
  );
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-fit glossy flex-grow basis-1/4 ">
      <div className="flex justify-between items-center">
        <div className="space-x-1">
          <div className="flex gap-2 items-end">
            {loading || !data ? (
              <span className="animate-pulse py-6 px-8 bg-gray-200"></span>
            ) : (
              <span className="text-4xl text-slate-800 font-medium">{amount}</span>
            )}
            {/* <span className="text-sm text-[green]">+{percentage}</span> */}
            {selectField}
          </div>
        </div>
        <div className="p-2 flex w-fit rounded-full bg-amber-100">{icon}</div>
      </div>
      <p className="text-lg text-slate-600 px-4 font-medium">{title}</p>
      {loading || !data ? <div className="animate-pulse bg-gray-200 h-28 w-full"></div> : chart}
    </div>
  );
};

export default ChartCard;
