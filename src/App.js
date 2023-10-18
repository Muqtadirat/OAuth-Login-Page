import logo from "./logo.svg";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

function App() {
  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
