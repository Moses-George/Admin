
const JobCardSkeleton = () => {


  return (
      <div className="job-card flex-grow basis-1/4  space-y-6 bg-white rounded-lg shadow-md p-6  gap-4 w-fit glossy">
        <div className="flex items-center w-full">
          <div className="w-full space-y-3">
            <p className="bg-gray-200 h-2 w-32 animate-pulse"></p>
            <p className="bg-gray-200 h-2 w-40 animate-pulse"></p>
          </div>
          <div className="bg-gray-200 h-16 w-20 rounded-full animate-pulse" />
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-gray-200 h-2 w-16 animate-pulse"></p>
          <p className="bg-gray-200 h-2 w-24 animate-pulse"></p>
        </div>
        <p className="bg-gray-200 h-2 w-40 animate-pulse"></p>
        <p className="bg-gray-200 h-2 w-48 animate-pulse"></p>
        <p className="bg-gray-200 h-2 w-60 animate-pulse"></p>
        <p className="bg-gray-200 h-2 w-28 animate-pulse"></p>
        <div className="flex items-center justify-between gap-16">
          <span className="bg-gray-200 h-8 w-20 px-2 rounded-2xl animate-pulse">
          </span>
          <span className="bg-gray-200 h-2 w-28 animate-pulse"></span>
        </div>
      </div>
  );
};

export default JobCardSkeleton;
