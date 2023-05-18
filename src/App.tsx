import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Login from "./pages/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";
import ContactUs from "./pages/contact-us/contact-us";
import Dashboard from "./pages/dashboard/dashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
