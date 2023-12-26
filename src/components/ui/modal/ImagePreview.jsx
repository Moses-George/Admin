import React from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';

const ImagePreviewOverlay = ({ onClose, onSave, image, loading, handleChange }) => {
  return (
    <div className="fixed border-gradient bg-white z-[9999]  lg:top-10 top-12 p-4 space-y-4 w-[95%] lg:w-[30rem] rounded-lg">
      <img src={image} alt="" className="w-full lg:h-96 h-80" />
      <div className=" flex justify-between text-white">
        <button className="px-4 py-2 w-48 rounded-3xl bg-red-600" onClick={onClose}>
          Cancel
        </button>
        <label
          htmlFor="change_image"
          className="relative cursor-pointer px-4 py-2 w-48 rounded-3xl bg-lime-600 text-center">
          change
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
        <button className="px-4 py-2 w-80 rounded-3xl bg-amber-600 text-white" onClick={onSave}>
          {loading ? 'Saving....' : 'Save'}
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
