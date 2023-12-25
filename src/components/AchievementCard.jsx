const AchieveMentCard = ({ bgColor, title, amount, icon, hover }) => {
  return (
    <div
      className={` ${bgColor} shadow-md rounded-md py-6 px-4 flex flex-grow basis-1/5 gap-3 text-white ${hover}`}>
      {icon}
      <div className="text-end w-full">
        <p className="font-medium w-100">{title}</p>
        <h1 className="text-3xl font-semibold w-100">{amount}</h1>
      </div>
    </div>
  );
};

export default AchieveMentCard;
