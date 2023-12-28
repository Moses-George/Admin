import React from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';
import { Cancel, CancelOutlined, ChangeCircle, Save } from '@mui/icons-material';

const ImagePreviewOverlay = ({ onClose, onSave, image, loading, handleChange }) => {
  const loadingSpinner = (
    <div
      className="animate-spin inline-block w-6 h-6 border-[4px] border-current border-t-transparent text-blue-600 rounded-full"
      aria-label="loading"></div>
  );
  return (
    <div className="fixed border-gradient bg-white z-[9999]  lg:top-10 top-12 p-4 space-y-4 w-[95%] lg:w-[30rem] rounded-lg">
      <img src={image} alt="" className="w-full lg:h-96 h-80" />
      <div className=" flex justify-between text-white">
        <button className="flex items-center gap-3 justify-center px-4 py-2 w-48 rounded-3xl bg-red-600 shadow-md hover:opacity-70" onClick={onClose}>
          <Cancel />
          Cancel
        </button>
        <label
          htmlFor="change_image"
          className="relative flex items-center gap-3 justify-center cursor-pointer px-4 py-2 w-48 rounded-3xl bg-lime-600 text-center shadow-md hover:opacity-70">
          <ChangeCircle />
          <span className=''>Change</span>
        </label>
        <input
          type="file"
          name="media"
          id="change_image"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="flex items-center gap-4 justify-center px-4 py-2.5 w-80 rounded-3xl bg-slate-100 text-slate-700 shadow-lg hover:opacity-70"
          onClick={onSave}>
          {loading ? loadingSpinner : <Save className="" />}
          <span className="font-medium text-lg">{loading ? 'Saving...' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
};

const ImagePreview = ({ onClose, onSave, image, loading, handleChange }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(
        <ImagePreviewOverlay
          onClose={onClose}
          onSave={onSave}
          image={image}
          loading={loading}
          handleChange={handleChange}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ImagePreview;
