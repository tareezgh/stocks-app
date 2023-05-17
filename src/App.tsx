import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Login from "./pages/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
