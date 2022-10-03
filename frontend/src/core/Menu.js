import React from "react";
import { Link, useLocation } from "react-router-dom";

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
      <li className="nav-item">
        <Link
          style={currentTab(useLocation(), "/signout")}
          className="nav-link"
          to="/signout"
        >
          Signout
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
