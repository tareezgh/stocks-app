import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import SignIn from "./pages/signIn/signIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import ContactUs from "./pages/contact-us/contact-us";
import Dashboard from "./pages/dashboard/dashBoard";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
