import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

function CustomButton({ onClick, children }) {
  return (
    <button
      className="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-3 mb-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Form() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="Form mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="mt-10 mb-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up
      </h1>
      <form id="signUp-form" className="space-y-4" action="#" method="POST">
        <label
          htmlFor="email"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Email{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label
          htmlFor="password"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
        />
        <label
          htmlFor="confirmPassword"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Confirm Password{" "}
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
        />
        <div className="mt-4 flex items-center justify-center">
          <input
            type="checkbox"
            id="rememberMe"
            value="LogRemember"
            className="form-checkbox h-5 w-5 mr-2"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <input
          type="submit"
          value="Sign up"
          className="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer "
        />

        <p className="my-3 text-center">or</p>

        <div>
          {" "}
          <CustomButton onClick={() => login()}>
            Sign up with Google 🚀
          </CustomButton>
        </div>

        <p>
          Already a user? <Link to="/LoginForm">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Form;
