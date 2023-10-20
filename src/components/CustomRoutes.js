import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import LoginForm from "./LoginForm";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/" element={<Form />} />
    </Routes>
  );
}

export default CustomRoutes;
