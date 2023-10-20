import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";

function CustomButton({ onClick, children }) {
  const handleClick = (e) => {
    e.preventDefault(); //Prevent form submission
    onClick();
  };

  return (
    <button
      className="flex w-full justify-center rounded-lg bg-violet-600 px-3 py-3 mb-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function Form() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const navigate = useNavigate();

  //States for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //States for checking errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //Handling email and pass
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  //Handling form submission
  const handleSubmit = (e) => {
    if (email === "" || password === "" || confirmPassword === "") {
      setError(true);
      return;
    }

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
    } else {
      alert(`Setting up profile...`)
    }
  };

  return (
    <div className="Form mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="mt-10 mb-5 text-center text-4xl font-bold leading-9 tracking-tight text-violet-500">
        Sign up
      </h1>
      <form
        id="signUp-form"
        className="space-y-4"
        action="#"
        method="#"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="email"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Email{" "}
        </label>
        <input
          onChange={handleEmail}
          value={email}
          type="text"
          id="email"
          name="email"
          autoComplete="on"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        />
        <label
          htmlFor="password"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Password{" "}
        </label>
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          name="password"
          minLength={6}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
          required
          autoComplete="on"
        />
        <label
          htmlFor="confirmPassword"
          className="block text-md font-medium leading-6 text-gray-900 text-left"
        >
          Confirm Password{" "}
        </label>
        <input
          onChange={handleConfirmPassword}
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          minLength={6}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
          autoComplete="on"
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
          className="flex w-full justify-center rounded-lg bg-violet-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 cursor-pointer "
        />

        <p className="my-3 text-center">or</p>

        <div>
          {" "}
          <CustomButton
            onClick={() => {
              login();
              handleSubmit();
            }}
          >
            Sign up with Google 🚀
          </CustomButton>
        </div>

        <p>
          Already a user?{" "}
          <Link
            to="/loginform"
            className="text-violet-800 hover:text-sky-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Form;
