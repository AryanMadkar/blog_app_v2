import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ThemeContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import {
  signinusingemailandpassword,
  signinusinggoogle,
} from "../../libs/Auth";
import { useAuth } from "../../context/Context";
const LOgin = () => {
  const { setauthorise, authorise, setuserdata } = useAuth();
  const [sign, setSign] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const onsubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/user/login",
  //       formData,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setuserdata(response.data);
  //     console.log(response.data);
  //     toast.success("Login Successfully");
  //     setauthorise(true);
  //   } catch (error) {
  //     console.log(error.response?.data || error.message);
  //     toast.error("Login Failed");
  //   }
  // };
  // if (authorise) {
  //   return <Navigate to="/" />;
  // }

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      if (!sign) {
        setSign(true);
        const result = await signinusingemailandpassword(
          formData.email,
          formData.password
        );
        console.log(result);
        setauthorise(true);
        setuserdata(result.user);
        navigate("/");
      }
    } catch (error) {
      toast.error("Login Failed");
      console.log(error.response?.data || error.message);
    }
  };

  const signinwithgoogle = async () => {
    try {
      if (!sign) {
        setSign(true);
        const result = await signinusinggoogle().catch(() => {
          setSign(false);
        });
        console.log(result);
        setauthorise(true);
        setuserdata(result.user);
        navigate("/");
      }
    } catch (error) {
      toast.error("Login Failed");
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh]">
      {" "}
      <div className=" w-[30vw] h-fit gap-2 bg-[#1D232A] rounded-lg p-8 flex flex-col  items-center justify-center   mt-10 ">
        <h2 className="text-gray-100 text-[2rem] font-medium title-font  mb-5">
          Sign In
        </h2>
        <form onSubmit={onsubmit}>
          <div className="relative mb-4">
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <input
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
        <p className="text-xs text-gray-100 mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LOgin;
