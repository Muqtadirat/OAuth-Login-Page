import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

function CustomButton({ onClick, children }) {
  return (
    <button
      className="flex w-full justify-center rounded-lg bg-violet-600 px-3 py-3 mb-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function LoginForm() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="Form mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form id="login-form" className="space-y-4 " action="#" method="#">
        <h1 className="mt-10 mb-6 text-center text-4xl font-bold leading-9 tracking-tight text-violet-500">
          Welcome Back!👋
        </h1>

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
          type="password"
          name="password"
          autoComplete="on"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
          required
        />

        <input
          type="submit"
          value="Sign in"
          className="flex w-full justify-center rounded-lg bg-violet-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 cursor-pointer "
        />

        <p className="my-3 text-center">or</p>

        <div>
          {" "}
          <CustomButton onClick={() => login()}>
            Sign in with Google 🚀
          </CustomButton>
        </div>

        <p>
          Not a user?{" "}
          <Link
            to="/"
            className="text-violet-800 hover:text-sky-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
