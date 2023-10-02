


const ResetPassword = () => {

    return (
        <section className="mx-auto shadow-md bg-white h-fit my-8 w-[30rem]">
        <div className="p-12 space-y-8">
          <h1 className="text-3xl text-slate-700 tracking-wide">Reset Password</h1>
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
                placeholder='Enter your email'
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm sm:w-auto px-8 py-2.5 text-center">
              submit
            </button>
          </form>
          <p className="text-sm text-slate-600">A link would be sent to your email, click the link to reset your password.</p>
        </div>
      </section>
    )
}

export default ResetPassword;