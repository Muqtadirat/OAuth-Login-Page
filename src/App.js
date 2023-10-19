import CustomRoutes from "./components/CustomRoutes";
import "./App.css";

function App() {
  return (
    <div className="App flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="container sm:mx-auto sm:w-full sm:max-w-sm">
        <CustomRoutes />

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
