import { Link } from 'react-router-dom';
import man from '../assets/images/pik.png';

const Auth = () => {


  return (
    <section className="mx-auto shadow-md bg-white grid grid-cols-[4.5fr_5.5fr] h-fit my-8 w-4/5">
      <div className="p-12 space-y-8">
        <h1 className="text-4xl text-slate-700 tracking-wide">Login</h1>
        <form className="">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-slate-600">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:outline-none focus:ring-lime-300 block w-full p-2.5"
              placeholder="your email"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-slate-600">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:outline-none focus:ring-lime-300 block w-full p-2.5"
              placeholder='your password'
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5 flex-1">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:outline-none focus:ring-lime-300"
                required
              />
            </div>
            <label
              for="remember"
              className="flex-2 ml-2 text-sm font-medium text-gray-900">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm sm:w-auto px-8 py-2.5 text-center">
            Login
          </button>
        </form>
        <p className='mt-8 text-slate-700'>Forgot password ? <Link to="/reset-password" className='underline'> Reset</Link> </p>
      </div>

      <div className="w-full bg-lime-800 p-8 h-fit">
        <div className="py-4 text-center space-y-2">
          <h1 className="text-4xl text-white font-semibold tracking-widest">Welcome back!</h1>
          <p className="text-lg font-normal text-white">Login to access your admin account</p>
        </div>
        <img className="h-1/2 w-3/4 mx-auto" src={man} alt="man" />
      </div>
    </section>
  );
};

export default Auth;
