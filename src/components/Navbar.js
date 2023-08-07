import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  function logoutHandler() {
    toast.success("sucessfully logged out");
    setIsLoggedIn(false);
  }
  return (
    <div className="flex justify-between w-11/12 max-w-[1150px] mx-auto items-center pt-4">
      <NavLink>
        <img src={logo} alt="logo" width={124} height={32} />
      </NavLink>
      <nav>
        <ul className="flex gap-5 text-richblack-200 font-bold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="#">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="border border-richblack-700 text-white px-4 py-2 bg-richblack-700 rounded-md hover:bg-richblack-800 transition duration-200">
              Login
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <button className="border border-richblack-700 text-white px-4 py-2 bg-richblack-700 rounded-md hover:bg-richblack-800 transition duration-200">
              Signup
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              className="border border-richblack-700 text-white px-4 py-2 bg-richblack-700 rounded-md hover:bg-richblack-800 transition duration-200"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button className="border border-richblack-700 text-white px-4 py-2 bg-richblack-700 rounded-md hover:bg-richblack-800 transition duration-200">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
