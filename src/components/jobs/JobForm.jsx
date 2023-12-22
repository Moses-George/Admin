import { Add, Edit, Photo } from '@mui/icons-material';
import InputField from '../ui/InputField';
import InputFieldsData from '.';
import useForm from '../../hooks/useForm';

const InitialData = {
  company: '',
  position: '',
  location: '',
  salary: '',
  category: '',
  media: new Blob(),
  description: ''
};

const JobForm = ({ action }) => {
  const { mediaPreview, setMediaPreview, formData, setFormData, handleChange } =
    useForm(InitialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(InitialData);
    setMediaPreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full grid lg:grid-cols-[4fr_6fr] gap-12">
      <div className="flex flex-col gap-5">
        {InputFieldsData.map((fieldData) => {
          const { id, name, type, placeholder, icon } = fieldData;
          return (
            <div className="w-full" key={id}>
              <label
                className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                htmlFor={name}>
                {name}
              </label>
              <InputField
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                ringColorClass="focus:ring-amber-300"
                icon={icon}
              />
            </div>
          );
        })}
        <div className="w-full">
          <label
            className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="category">
            Category
          </label>
          <div className="relative">
            <select
              required
              className="block appearance-none  w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:ring-4 focus:outline-none focus:ring-amber-300 focus:bg-white"
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}>
              <option className="font-bold" disabled>
                Categories
              </option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-12">
        <div className="flex flex-col-reverse lg:flex-row gap-3">
          <label
            htmlFor="media-image"
            className="relative flex flex-col p-3 bg-gray-100 h-48 lg:h-full w-full border-2 border-dashed border-gray-700 rounded-md text-center justify-center cursor-pointer">
            {/* <MdCloudUpload className="text-4xl text-medium-gray self-center" /> */}
            <p className="text-medium-gray font-semibold text-sm">
              Click or Drag and drop image to upload image
            </p>
            {/* <MdAddAPhoto className="self-center text-3xl" /> */}
            <p className="text-sm text-medium-gray">File type include jpeg, jpg, png</p>
            <input
              className="hidden"
              id="media-image"
              name="media"
              type="file"
              accept="image/*"
              multiple={false}
              onChange={handleChange}
            />
          </label>{' '}
          <div className="w-full h-fit rounded-md shadow-md p-3">
            {mediaPreview ? (
              <img src={mediaPreview} alt="" className="w-48 h-48 mx-auto" />
            ) : (
              <div className="w-48 h-48 mx-auto">
                <Photo className="text-slate-600" sx={{ fontSize: '190px' }} />
              </div>
            )}
            <div className="w-full flex justify-between items-center py-3">
              <label
                className="relative bg-dark-peach rounded-md px-3 py-2 text-center text-white"
                htmlFor="media-image">
                change
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:px-3">
            <label
              className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
              htmlFor="grid-state">
              Job Description
            </label>
            <textarea
              required
              id="message"
              rows={3}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:bg-white focus:ring-4 focus:outline-none focus:ring-amber-300"
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="description of meal..."></textarea>
          </div>
          <button className="flex items-center justify-center bg-amber-700 text-white text-sm gap-2 rounded-xl p-2.5 w-36 shadow-md">
            {action === 'Add' ? (
              <Add className="text-white text-xl" />
            ) : (
              <Edit className="text-white text-xl" />
            )}
            <span className="font-medium">{action} Job</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
