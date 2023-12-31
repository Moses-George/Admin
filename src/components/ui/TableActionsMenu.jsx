import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { AccountCircle, Delete, Download, Edit, MoreVert, Update } from '@mui/icons-material';
import useApiToast from '../../hooks/useApiToast';
import { useGetUserQuery, useVerifyUserMutation } from '../../store/api/userApi';
import { useUpdateMentorPriceMutation, useVerifyMentorMutation } from '../../store/api/memberApi';
import { getToken } from '../../utils/authHelpers';
import NewPrice from './modal/NewPrice';
import useForm from '../../hooks/useForm';

const initialData = {
  price: ''
};

const TableActionsMenu = ({ record, setIsDeleting, page, setSearchParams, refetch }) => {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(Boolean(record?.verified));
  const [isUpdating, setIsUpdating] = useState(false);
  const { formData, handleChange } = useForm(initialData);
  const [
    verifyUser,
    { isLoading: loading_u, isError: isError_u, error: error_u, isSuccess: success_u, data: data_u }
  ] = useVerifyUserMutation();
  const [
    verifyMentor,
    { isLoading: loading_m, isError: isError_m, error: error_m, isSuccess: success_m, data: data_m }
  ] = useVerifyMentorMutation();
  const token = getToken();
  const { data: user, refetch: refetchCurrentUser } = useGetUserQuery(token);
  const [updateMentorPrice] =
    useUpdateMentorPriceMutation();
  const currentUser = user?.data[0];
  const isSuccess = success_m || success_u;
  const isLoading = loading_m || loading_u;
  const isError = isError_m || isError_u;
  const error = error_m || error_u;
  const data = data_m || data_u;
  useApiToast({
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Verifying account...',
    successMsg: 'Verification complete!'
  });

  const handleVerificationToggle = async () => {
    if (!currentUser?.verified) {
      toast.warning("You're not authorized to perform this action!", { autoClose: 3000 });
      return;
    }
    switch (page) {
      case 'admins':
        await verifyUser(record?.id);
        refetch();
        break;

      case 'mentors':
        await verifyMentor(record?.id);
        break;

      default:
        break;
    }
  };

  const openModal = () => {
    if (!currentUser?.verified) {
      toast.warning("You're not authorized to perform this action!", { autoClose: 3000 });
      return;
    }
    setIsDeleting(true);
    setSearchParams({ userId: record.id });
  };

  const openNewPriceModal = () => {
    if (!currentUser?.verified) {
      toast.warning("You're not authorized to perform this action!", { autoClose: 3000 });
      return;
    }
    setIsUpdating(true);
  };

  // useEffect(() => {
  //   if (success_p) {
  //     setIsUpdating(false);
  //   }
  // }, [success_p]);

  useEffect(() => {
    if (isSuccess) {
      if (page === 'mentors') {
        setIsVerified(Boolean(data_m?.status));
      }
      if (page === 'admins') {
        setIsVerified(Boolean(data_u?.status));
      }
      refetch();
    }
  }, [isSuccess]);

  useEffect(() => {
    setIsVerified(Boolean(record?.verified));
  }, [isVerified, record?.verified]);

  return (
    <>
      {isUpdating && (
        <NewPrice
          updateMentorPrice={() => updateMentorPrice({ Id: record.id, payload: formData })}
          setIsUpdating={setIsUpdating}
          handleChange={handleChange}
          value={formData.price}
          refetch={refetch}
          mentorName={record.firstName}
        />
      )}
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
              {page === 'mentors' && (
                <li>
                  <button
                    onClick={openNewPriceModal}
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-1 justify-between">
                    <Update className="text-slate-500" />
                    <span className="text-slate-800 text-sm">Update mentor's price</span>
                  </button>
                </li>
              )}
              <li>
                {page !== 'mentees' && page !== 'payments' && (
                  <div className="flex p-2 rounded hover:bg-gray-100">
                    <label className="relative inline-flex items-center gap-1 w-full cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        value={record?.verified}
                        checked={isVerified}
                        onChange={handleVerificationToggle}
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
              {page === 'payments' ? (
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
    </>
  );
};

export default TableActionsMenu;
