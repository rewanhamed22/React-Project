import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, userState] = useState("");
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      userState(localStorage.getItem("FirstName"));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");

    navigate("/login");
  };
  return (
    <div className="navbar sticky top-0 z-50 drop-shadow text-white  bg-[#272B51]">

      <div className="navbar-start text-white">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/about" className="justify-between">
                About us
              </Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl mr-8">Breathe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex justify-end gap-6">
        {user ? (
          <>
            <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
              <div className="w-15 rounded-full">
                <img src="data:image/png;base64,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" />
              </div>
            </label>
            <button
              onClick={handleLogout}
              className="btn bg-transparent text-white capitalize  "
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <Link to="/login">
                <button className=" text-white  px-3 cursor-pointer  btn bg-transparent hover:bg-white/90 hover:text-[#272B51] capitalize ">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="  text-white  px-3 cursor-pointer  btn bg-transparent hover:bg-white/90 hover:text-[#272B51] capitalize  ">
                  Sign up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default NavBar;
