import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#FF0000" };
  }
};

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/")}
          className="nav-link"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/signup")}
          className="nav-link"
          to="/signup"
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/signin")}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                return <Navigate to="/" />;
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default Menu;
