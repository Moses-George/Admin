import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './Backdrop';
import { motion } from 'framer-motion';
import { Cancel, Delete } from '@mui/icons-material';
import { dropIn } from '../../../utils/framer-motion/variants';

const DeleteModalOverlay = ({ setIsDeleting, message }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="fixed border-gradient bg-white z-[9999]  lg:top-20 top-12  p-8 space-y-6 w-full lg:w-[28rem] rounded-lg flex flex-col items-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="w-full">
        <h1 className="text-slate-800 text-2xl font-medium">{message?.title}</h1>
        <p className="text-slate-600">(Moses George Odion)</p>
      </div>
      <p className="text-slate-500">{message?.content}</p>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full">
        <button
          onClick={() => setIsDeleting(false)}
          className="p-3 bg-lime-500 text-white rounded-lg space-x-2 w-4/5">
          <Cancel className="" />
          <span>No, Cancel</span>
        </button>
        <button className="p-3 bg-red-500 text-white rounded-lg space-x-2 w-4/5">
          <Delete className="" />
          <span>Yes, Delete</span>
        </button>
      </div>
    </motion.div>
  );
};

const DeleteModal = ({ setIsDeleting, message }) => {
  const root = document.getElementById('modal-root');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <Backdrop />
          <DeleteModalOverlay setIsDeleting={setIsDeleting} message={message} />
        </>,
        root
      )}
    </React.Fragment>
  );
};

export default DeleteModal;
