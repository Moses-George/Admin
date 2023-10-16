import { Link } from 'react-router-dom';
import SelectMenu from './SelectMenu';
import { AddCircle, Search } from '@mui/icons-material';
import InputField from './InputField';

const FilterBar = ({ btnText, btnAction, path }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-4 w-full grid grid-cols-1 gap-4 lg:grid-cols-3 justify-item-center items-center glossy">
      <SelectMenu />

      <form className="flex items-center lg:w-96 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2  row-start-1 row-end-3">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <InputField
          id=""
          name=""
          type="text"
          placeholder="Search any job..."
          ringColorClass="focus:ring-lime-300"
          icon={<Search className="text-slate-400" />}
        />
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-lime-500 w-fit rounded-lg border border-lime-700 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-200">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <Link to={path} className="lg:justify-self-end w-fit">
        <button
          onClick={btnAction}
          className="flex items-center gap-2 py-2 px-4 bg-amber-500 rounded-3xl text-white">
          <AddCircle />
          <span className="">{btnText}</span>
        </button>
      </Link>
    </div>
  );
};

export default FilterBar;
