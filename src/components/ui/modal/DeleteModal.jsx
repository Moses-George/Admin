import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './Backdrop';
import { motion } from 'framer-motion';
import { Cancel, Delete } from '@mui/icons-material';
import { dropIn } from '../../../utils/framer-motion/variants';

const DeleteModalOverlay = ({ setIsDeleting }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="fixed border-gradient bg-white z-[9999] top-24 p-8 space-y-6 w-[90%] lg:w-[28rem] flex flex-col items-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="w-full">
        <h1 className="text-slate-800 text-2xl font-medium">Delete member ?</h1>
        <p className="text-slate-600">(Moses George Odion)</p>
      </div>
      <p className="text-slate-500">
        Deleting a member will automatically erase all records of the member. You'll need to be
        re-authenticated to perform this action.
      </p>
      <div className="flex gap-12">
        <button
          onClick={() => setIsDeleting(false)}
          className="p-3 bg-lime-500 text-white rounded-lg space-x-2">
          <Cancel className="" />
          <span>No, Cancel</span>
        </button>
        <button className="p-3 bg-red-500 text-white rounded-lg space-x-2">
          <Delete className="" />
          <span>Yes, Delete</span>
        </button>
      </div>
    </motion.div>
  );
};

const DeleteModal = ({ setIsDeleting }) => {
  const root = document.getElementById('modal-root');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <Backdrop />
          <DeleteModalOverlay setIsDeleting={setIsDeleting} />
        </>,
        root
      )}
    </React.Fragment>
  );
};

export default DeleteModal;
