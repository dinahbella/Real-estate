import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Profile from "./components/profile";
import About from "./components/About";

const page = () => {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignOut />} />
      <Route path="/profle" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>;
};

export default page;
