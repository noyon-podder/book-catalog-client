import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.avif";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { userCreate } = useContext(AuthContext);
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      userCreate(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          reset();
          toast.success("user create successfully");
          setConfirmPasswordError("");
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setConfirmPasswordError("Password and Retype password doesn't match");
    }
    console.log("formdata: ", data);
  };

  return (
    <div className="bg-gray-100 py-10">
      <section className="">
        <div className="container flex items-center justify-center px-6 mx-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md border px-5 rounded py-8 bg-white "
          >
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
            </div>

            <div className="flex items-center justify-center mt-6">
              <h2 className="text-xl text-[#333] font-bold capitalize">
                Create an account
              </h2>
            </div>
            {errorMessage && (
              <div className="w-full text-center mt-3">
                <span className="text-red-700 text-base font-semibold text-center">
                  {errorMessage}
                </span>
              </div>
            )}
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                {...register("name", { required: true })}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Full Name"
              />
            </div>
            {errors.name && (
              <span className="text-red-600 my-2 text-base ">
                Name is required
              </span>
            )}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                {...register("email", { required: true })}
                className="block w-full py-3 text-gray-700  bg-white border rounded-lg px-11    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            {errors.email && (
              <span className="text-red-600 my-2 text-base ">
                Email is required
              </span>
            )}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                {...register("password", { required: true })}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <span className="text-red-600 my-2 text-base ">
                Password is required
              </span>
            )}

            <div className="relative flex items-center  mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="block w-full px-10 py-3  text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
            </div>
            {confirmPasswordError && (
              <span className="text-red-600  text-base ">
                {confirmPasswordError}
              </span>
            )}

            <div className="mt-6">
              <input
                type="submit"
                className="w-full px-6 py-3 text-center cursor-pointer text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#F86263] rounded-lg hover:bg-[#ca4343] focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                value=" Sign Up"
              />

              <div className="mt-6 text-center ">
                <Link
                  to="/sign_in"
                  className="text-sm text-[#EA5368] hover:underline "
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
