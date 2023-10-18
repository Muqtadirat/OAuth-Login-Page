import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Form from "./components/Form";
import "./App.css";

function CustomButton({ onClick, children }) {
  return (
    <button
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mb-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="App flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="container sm:mx-auto sm:w-full sm:max-w-sm">
        <header>
          <h1 className="mt-10 mb-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login To Your Account
          </h1>
        </header>

        <CustomButton onClick={() => login()}>
          Sign in with Google 🚀
        </CustomButton>
        <p className="block text-sm mb-5 font-medium leading-6 text-gray-900">
          Or use e-mail address
        </p>
        <Form />

        {/*<GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log(`Login Failed`);
        }}
      />*/}
      </div>
    </div>
  );
}

export default App;
