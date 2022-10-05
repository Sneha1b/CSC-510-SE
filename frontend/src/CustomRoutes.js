import React from "react";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/user/dashboard"  element={<UserDashBoard/ >} />
        <Route path="/admin/dashboard"  element={<AdminDashBoard/ >} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
