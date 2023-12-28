import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import useForm from '../../hooks/useForm';
import ImagePreview from '../ui/modal/ImagePreview';
import { useGetUserQuery } from '../../store/api/userApi';
import { useUploadUserAvatarMutation } from '../../store/api/userApi';
import { toast } from 'react-toastify';
import { getToken } from '../../utils/authHelpers';

const initialData = {
  media: {}
};

const ChangeDPForm = () => {
  const { formData, setFormData, handleChange, mediaPreview, setMediaPreview } = useForm();
  const [
    uploadUserAvatar,
    { isLoading: loading_1, isError: isError_1, error: error_1, isSuccess: success_1, data: user_1 }
  ] = useUploadUserAvatarMutation();
  const token = getToken();
  const { isLoading, isError, error, isSuccess, data: user, refetch } = useGetUserQuery(token);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!ImagePreview) {
      toast.error('Select an image!', { autoClose: 2000 });
      return;
    }
    const data = new FormData();
    data.append('file', formData.media);
    await uploadUserAvatar({ token, payload: data });
  };

  useEffect(() => {
    if (success_1) {
      setMediaPreview(null);
      refetch();
    }
  }, [success_1]);

  const closeModal = () => {
    setMediaPreview(window.URL.revokeObjectURL(formData.media));
    setFormData(initialData);
  };

  return (
    <>
      {mediaPreview && (
        <ImagePreview
          image={mediaPreview}
          onClose={closeModal}
          handleChange={handleChange}
          onSave={handleUpload}
          loading={loading_1}
        />
      )}
      <form className="w-fit lg:m-0 mx-auto">
      <div className='p-1.5 rounded-full border-4 h-fit w-fit border-lime-300'>
        {isLoading || !user ? (
          <div className="animate-pulse w-[10rem] h-[10rem] rounded-full bg-gray-300 shadow-md"></div>
        ) : user?.data[0].imageUrl ? (
          <img src={user?.data[0].imageUrl} alt="" className="rounded-full h-[10rem] w-[10rem]" />
        ) : (
          <Avatar sx={{ width: '10rem', height: '10rem' }} />
        )}
        </div>
        <label htmlFor="fileInput" className="relative cursor-pointer">
          <div className="absolute -top-12 -right-40 bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center">
            <AddAPhoto className="text-white" sx={{ fontSize: '30px' }} />
          </div>
        </label>
        <input
          type="file"
          name="media"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default ChangeDPForm;
