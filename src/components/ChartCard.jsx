import ChartFilter from './ui/ChartFilter';

const ChartCard = ({ icon, chart, total, yearTotal, title, loading, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-fit glossy flex-grow basis-1/4 ">
      <div className="flex justify-between items-center">
        <div className="space-x-1">
          <div className="flex gap-2 items-end">
            {loading || !data ? (
              <span className="animate-pulse py-6 px-8 bg-gray-200"></span>
            ) : (
              <span className="text-4xl text-slate-800 font-medium">{yearTotal}</span>
            )}
            {/* <span className="text-sm text-[green]">+{percentage}</span> */}
            <ChartFilter />
          </div>
        </div>
        <div className="p-2 flex w-fit rounded-full bg-amber-100">{icon}</div>
      </div>
      <div className="flex items-center gap-3 font-medium text-2xl text-slate-800 my-4">
        <h2 className="">Total: </h2>
        {loading || !data ? (
          <span className="animate-pulse py-4 px-10 bg-gray-200"></span>
        ) : (
          <h2 className="">{total}</h2>
        )}
      </div>
      <p className="text-lg text-slate-600 px-4 font-medium">{title}</p>
      {loading || !data ? <div className="animate-pulse bg-gray-200 h-28 w-full"></div> : chart}
    </div>
  );
};

export default ChartCard;
