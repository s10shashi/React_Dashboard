import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Component/SignIn/SignIn";
import SignInOTP from "../Component/SignIn/SignInOTP";
import SignUp from "../Component/SignUp/SignUp";
import SignUpOTP from "../Component/SignUp/SignUpOtp";
import Event from "../Component/Event/Event";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={<SignIn />} />
      <Route path="/signin-otp" Component={<SignInOTP />} />
      <Route path="/signup" Component={<SignUp />} />
      <Route path="/signup-otp" Component={<SignUpOTP />} />
      <Route path="/events" Component={<Event />} />
    </Routes>
  );
};

export default AllRoutes;
