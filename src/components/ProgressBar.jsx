

const ProgressBar = ({label, percentage, labelSize, bgColorClass}) => {

    return (
        <div className="w-full space-y-3">
        <div className="flex justify-between font-medium">
          <span className="text-slate-800">{`${label} (${percentage}%)`}</span>
          <span className="text-slate-600 text-end">{labelSize}</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-md ">
          {' '}
          <div className={`${bgColorClass} h-2 rounded-md`} style={{width: percentage+"%"}} ></div>
        </div>
      </div>
    )
}

export default ProgressBar;