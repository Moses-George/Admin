import { Email } from '@mui/icons-material';
import InputField from '../components/ui/InputField';
import useForm from '../hooks/useForm';

const InitialData = {
  email: ""
}

const ResetPassword = () => {

  const {formData, setFormData, handleChange} = useForm(InitialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(InitialData);
  }

  return (
    <section className="mx-auto shadow-md bg-white h-fit mt-16 w-[22rem] lg:w-[30rem]">
      <div className="lg:p-12 p-8 space-y-8">
        <h1 className="text-3xl text-slate-700 tracking-wide">Reset Password</h1>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
              Your email
            </label>
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              ringColorClass="focus:ring-lime-300"
              icon={<Email className="text-slate-400" />}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm sm:w-auto px-8 py-2.5 text-center">
            submit
          </button>
        </form>
        <p className="text-sm text-slate-600">
          A link would be sent to your email, click the link to reset your password.
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
