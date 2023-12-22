import { Avatar } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';

const ChangeDPForm = () => {
  return (
    <form className="w-fit lg:m-0 mx-auto">
      <Avatar sx={{ width: '10rem', height: '10rem' }} />
      <label htmlFor="fileInput" className="relative cursor-pointer">
        <div className="absolute -top-12 -right-40 bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center">
          <AddAPhoto className="text-white" sx={{ fontSize: '30px' }} />
        </div>
      </label>
      <input type="file" id="fileInput" accept="image/*" className="hidden" />
    </form>
  );
};

export default ChangeDPForm;
