import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import DeleteModal from '../ui/modal/DeleteModal';
import { modifiedDate } from '../../utils/timeAndDate'; 

const JobCard = ({
  id,
  company,
  position,
  imageUrl,
  salary,
  description,
  category,
  location,
  datePosted
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  // Persist commnt posted time
  const postedAt = modifiedDate.timeAgo(datePosted);

  // Update comment posted time
  useEffect(() => {
    const myTimer = setTimeout(() => {
      timeAgo();
    }, 1000);

    return () => {
      clearTimeout(myTimer);
    };
  }, []);

  return (
    <>
      {isDeleting && <DeleteModal setIsDeleting={setIsDeleting} />}
      <div className="job-card flex-grow basis-1/4 relative space-y-4 bg-white rounded-lg shadow-md p-6  gap-4 w-fit glossy">
        {/* Job card actions backdrop */}
        <div className="job-card-backdrop"></div>
        <div className="job-card-actions flex justify-center gap-8 text-center">
          <button
            onClick={() => setIsDeleting(true)}
            className="bg-red-600 rounded-full p-1 w-16 h-16 flex items-center justify-center">
            <Delete className="text-white" sx={{ fontSize: '30px' }} />
          </button>
          <Link
            to={`/jobs-listing/${id}`}
            className="bg-blue-600 rounded-full p-1 w-16 h-16 flex items-center justify-center">
            <Edit className="text-white" sx={{ fontSize: '30px' }} />
          </Link>
        </div>
        <div className="flex items-center w-full">
          <div className="w-full">
            <p className="text-slate-500">{company}</p>
            <p className="text-lg text-slate-800 font-medium">{position}</p>
          </div>
          <img className="w-12 h-12" src={imageUrl} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lime-800">${salary}</p>
          <p className="text-sm text-slate-500">{postedAt}</p>
        </div>
        <p className="text-slate-600">{description}</p>
        <div className="flex items-center justify-between gap-16">
          <span className="font-medium text-lime-800 py-1.5 rounded-3xl bg-lime-200 text-center w-24">
            {category}
          </span>
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </>
  );
};

export default JobCard;
