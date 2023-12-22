const ChartCardSkeleton = () => { 
    return (
      <div className="bg-white rounded-lg shadow-md p-4 glossy flex-grow basis-1/4 ">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="bg-gray-200 h-8 w-32 animate-pulse"></span>
            <span className="w-10 h-8 bg-gray-300 animate-pulse"></span> 
          </div>
          <div className="p-2 flex w-fit rounded-full bg-amber-100"></div>
        </div>
        <p className="text-lg text-slate-600 px-4 font-medium"></p>
      </div>
    );
  };
  
  export default ChartCardSkeleton; 
  