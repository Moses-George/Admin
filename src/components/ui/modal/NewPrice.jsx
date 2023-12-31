import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './Backdrop';
import { motion } from 'framer-motion';
import { Cancel, Money, Update } from '@mui/icons-material';
import InputField from '../InputField';
import { dropIn } from '../../../utils/framer-motion/variants';

const NewPriceOverlay = ({
  setIsUpdating,
  handleChange,
  value,
  mentorName,
  updateMentorPrice,
  refetch
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loadingSpinner = (
    <div
      className="animate-spin inline-block w-5 h-5 border-[4px] border-current border-t-transparent text-white rounded-full"
      role="status"
      aria-label="loading"></div>
  );

  const updatePrice = () => {
    setLoading(true);
    updateMentorPrice();
    setTimeout(() => {
      setIsUpdating(false);
      setLoading(false);
      refetch();
    }, 4000);
  };

  return (
    <motion.div
      className="fixed border-gradient bg-white z-[9999]  lg:top-20 top-12  p-8 space-y-6 w-[95%] lg:w-[28rem] rounded-lg flex flex-col items-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="w-full">
        <h1 className="text-2xl text-slate-800 font-medium">Update {mentorName}'s price</h1>
      </div>
      <div className="mb-6 w-full">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
          New price
        </label>
        <InputField
          id="price"
          name="price"
          type="price"
          placeholder="Enter mentor's new price."
          value={value}
          onChange={handleChange}
          ringColorClass="focus:ring-lime-300"
          icon={<Money className="text-slate-400" />}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full">
        <button
          onClick={() => setIsUpdating(false)}
          className="p-3 bg-lime-500 text-white rounded-lg space-x-2 w-4/5">
          <Cancel className="" />
          <span>No, Cancel</span>
        </button>
        <button
          onClick={updatePrice}
          className="flex items-center gap-3 p-3 bg-red-500 text-white rounded-lg space-x-2 w-4/5">
          {loading ? loadingSpinner : <Update className="" />}
          <span>{loading ? 'updating...' : 'Yes, update'}</span>
        </button>
      </div>
    </motion.div>
  );
};

const NewPrice = ({
  setIsUpdating,
  handleChange,
  value,
  loading,
  mentorName,
  updateMentorPrice,
  refetch
}) => {
  const root = document.getElementById('modal-root');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <Backdrop />
          <NewPriceOverlay
            setIsUpdating={setIsUpdating}
            handleChange={handleChange}
            value={value}
            loading={loading}
            updateMentorPrice={updateMentorPrice}
            refetch={refetch}
            mentorName={mentorName}
          />
        </>,
        root
      )}
    </React.Fragment>
  );
};

export default NewPrice;
