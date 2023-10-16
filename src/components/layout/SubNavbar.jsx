import { AddCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SubNavbar = ({ onClick, page, array, filterKey, param, query }) => {
  const links = Array.from(new Set(array.map((data) => data[filterKey])));

  return (
    <section className="bg-white rounded-md shadow-md glossy flex flex-col lg:flex-row gap-12 justify-between items-center py-4 px-8">
      <div className="space-x-6 text-slate-600 font-medium w-full">
        <Link to={`/${page}`} className={`${!param && 'selected'}`}>
          All 
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={{ pathname: `/${page}`, search: `?${query}=${link}` }}
            className={`${param === link && 'selected'}`}>
            {link.replace(/^./, link[0].toUpperCase())}
          </Link>
        ))}
      </div>
      <hr className='lg:hidden w-full' />
      <Link to="/mentors" className="lg:justify-self-end self-start w-44">
        <button
          onClick={onClick}
          className="flex items-center gap-1 py-2.5 px-4 bg-amber-500 rounded-3xl text-white w-40">
          <AddCircle />
          <span className="">Add Mentor</span>
        </button>
      </Link>
    </section>
  );
};

export default SubNavbar;
