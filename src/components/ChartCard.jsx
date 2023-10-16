const ChartCard = ({ icon, chart, amount, percentage, title }) => { 
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-fit glossy flex-grow basis-1/4 ">
      <div className="flex justify-between items-center">
        <div className="space-x-1">
          <span className="text-3xl text-slate-800 font-medium">{amount}</span>
          <span className="text-sm text-[green]">+{percentage}</span> 
        </div>
        <div className="p-2 flex w-fit rounded-full bg-amber-100">{icon}</div>
      </div>
      <p className="text-lg text-slate-600 px-4 font-medium">{title}</p>
      {chart}
    </div>
  );
};

export default ChartCard; 
