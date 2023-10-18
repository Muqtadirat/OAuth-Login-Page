import React from "react";

function Form() {
  return (
    <div className="Form mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form id="login-form" className="space-y-6" action="#" method="POST">
        <label
          for="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label
          for="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
        />
        <input type="checkbox" id="rememberMe" value="LogRemember" />
        <label for="rememberMe">Remember Me</label>
        <input
          type="submit"
          value="Login"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </form>
    </div>
  );
}

export default Form;
