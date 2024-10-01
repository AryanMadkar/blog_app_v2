import React, { useContext } from "react";
import logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import { FaCartArrowDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
import { signout } from "../libs/Auth";

import { ThemeContext } from "../context/Context";

const Navbar = () => {
  const { setauthorise, setuserdata, userdata, authorise } =
    useContext(ThemeContext);
  const navigate = useNavigate();
  // const logout = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/user/logout");
  //     console.log(response.data);
  //     setuserdata([]);
  //     toast.success("Logout Successfully");
  //     setauthorise(false);
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response?.data || error.message);
  //   }
  // };

  const logout = async () => {
    try {
      await signout();
      setauthorise(false);
      setuserdata([]);
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data || error.message);
    }
  };

  return (
    <div>
      <header className="text-white body-font ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex hover:text-green-500 transition-all duration-300 title-font font-medium items-center text-white mb-2 md:mb-0"
          >
            <img src={logo} alt="logo" className=" h-16 w-16 rounded-full" />
            <span className="ml-3 text-xl">
              <h1 className="font-bold text-[2rem] ">WORD BLOGS</h1>
            </span>
          </Link>
          <nav className="md:ml-auto font-bold flex flex-wrap items-center transition-all duration-300 text-base justify-center">
            <Link
              to="/"
              className="mr-5 hover:scale-105 hover:text-green-500 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="mr-5  hover:scale-105 hover:text-green-500 transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              to="/product"
              className="mr-5  hover:scale-105 hover:text-green-500 transition-all duration-300"
            >
              BLogs
            </Link>
            <Link
              to="/about"
              className="mr-5  hover:scale-105 hover:text-green-500 transition-all duration-300"
            >
              About
            </Link>
          </nav>
          <Link
            to="/register"
            className="inline-flex items-center bird  text-bold border-0 py-1 px-3 focus:outline-none font-bold text-white    hover:scale-110 transition-all duration-300 rounded text-base mt-4 md:mt-0"
          >
            Login
            <GoSignIn className="ml-2" size={20} fontWeight={600} />
          </Link>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {authorise ? (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
