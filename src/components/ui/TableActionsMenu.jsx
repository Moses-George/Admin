import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AccountCircle, Delete, Download, Edit, MoreVert } from '@mui/icons-material';
import useMembersFacade from '../../facades/useMembersFacade';
import useApiToast from '../../hooks/useApiToast';

const TableActionsMenu = ({ record, setIsDeleting, page, setSearchParams }) => { 
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(Boolean(record.verified));
  // const isFirstRun = useRef(true);
  const { verifyMentor, loading, success, error, members } = useMembersFacade();
  // const [searchParams, setSearchParams] = useSearchParams();

  const openModal = () => { 
    setIsDeleting(true);
    setSearchParams({ userId: record.id });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownIsVisible((prev) => !prev)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button">
        <MoreVert />
      </button>
      {/* 
<!-- Dropdown menu --> */}
      {dropdownIsVisible && (
        <div
          id="dropdownDots"
          className="z-[100]  absolute right-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton">
            <li>
              <button
                onClick={openModal} 
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-1 justify-between">
                <Delete className="text-slate-500" />
                <span className="text-slate-800 text-sm">
                  Delete {page.slice(0, page.length - 1)}
                </span>
              </button>
            </li>
            <li>
              {page !== 'mentees' && (
                <div className="flex p-2 rounded hover:bg-gray-100">
                  <label className="relative inline-flex items-center gap-1 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={record.status}
                      // checked={isVerified}
                      // onChange={handleChangeVerification}
                    />
                    <div className="w-12 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-lime-600"></div>
                    <span className="ml-3 text-sm font-medium text-slate-800 w-full">
                      toggle status
                    </span>
                  </label>
                </div>
              )}
            </li>
          </ul>
          <div className="py-2">
            {page === 'transactions' ? (
              <button className="space-x-3">
                <Download className="text-slate-500" />
                <span className="text-slate-800">Download receipt</span>
              </button>
            ) : (
              page === 'mentors' && (
                <Link
                  to={`/${page}/${record.id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 space-x-2">
                  <AccountCircle className="text-slate-500" />
                  <span className="text-slate-800">View profile</span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableActionsMenu;
