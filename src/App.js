import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Form from "./components/Form";
import "./App.css";

function CustomButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="App">
      <header>
        <h1>Login To Your Account</h1>
      </header>

      <Form />
      <CustomButton onClick={() => login()}>
        Sign in with Google 🚀
      </CustomButton>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log(`Login Failed`);
        }}
      />
    </div>
  );
}

export default App;
