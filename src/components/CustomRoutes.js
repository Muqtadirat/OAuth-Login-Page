import React from "react";
import { Route, Routes} from "react-router-dom";
import Form from "./Form";
import LoginForm from "./LoginForm";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}

export default CustomRoutes;
