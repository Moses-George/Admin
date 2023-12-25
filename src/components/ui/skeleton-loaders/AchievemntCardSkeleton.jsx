const AchieveMentCardSkeleton = () => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md py-6 px-4 flex flex-grow basis-1/5 gap-8">
    <div className="w-24 h-12 bg-gray-100 animate-pulse"></div>
      <div className="space-y-3">
        <p className="font-medium w-100 h-8 w-16 bg-gray-100 animate-pulse"></p>
        <h1 className="text-3xl font-semibold w-100 h-4 w-20 bg-gray-100 animate-pulse"></h1>
      </div>
    </div>
  );
};

export default AchieveMentCardSkeleton;
