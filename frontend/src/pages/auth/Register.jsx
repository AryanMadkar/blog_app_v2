import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ThemeContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { docreateuseremailandpassword } from "../../libs/Auth";
import { useAuth } from "../../context/Context";

const Register = () => {
  const { setauthorise, setuserdata } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "male",
  });

  // const onsubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (formData.password !== formData.confirmpassword) {
  //       toast.error("Password and Confirm Password do not match");
  //       return;
  //     }
  //     if (formData.password.length < 8) {
  //       toast.error("Password must be at least 8 characters");
  //       return;
  //     }
  //     if (
  //       !formData.name ||
  //       !formData.email ||
  //       !formData.password ||
  //       !formData.confirmpassword ||
  //       !formData.gender
  //     ) {
  //       toast.error("All fields are required");
  //       return;
  //     }
  //     const response = await axios.post(
  //       "http://localhost:5000/user/register",
  //       formData
  //     );
  //     setuserdata(response.data);
  //     toast.success("Register Successfully");
  //     console.log(response.data);
  //     setauthorise(true);
  //     navigate("/");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       password: "",
  //       confirmpassword: "",
  //       gender: "male",
  //     });
  //   } catch (error) {
  //     toast.error("Register Failed");
  //     console.error(error);
  //   }
  // };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmpassword) {
        toast.error("Password and Confirm Password do not match");
        return;
      }
      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters");
        return;
      }
      const result = await docreateuseremailandpassword(
        formData.email,
        formData.password
      );
      console.log(result);
      setauthorise(true);
      setuserdata(result.user);
      navigate("/");
    } catch (error) {
      toast.error("Register Failed");
      console.error(error);
    }
  };

  const signinwithgoogle = async () => {
    try {
      const result = await signinusinggoogle();
      console.log(result);
      setauthorise(true);
      setuserdata(result.user);
      navigate("/");
    } catch (error) {
      toast.error("Register Failed");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh]">
      {" "}
      <div className=" w-[30vw] min-h-[70vh] gap-2 bg-[#1D232A] rounded-lg p-8 flex flex-col   mt-10 ">
        <h2 className="text-gray-100 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <form onSubmit={onsubmit}>
          <div className="relative mb-4">
            <input
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              placeholder="Full Name"
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
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
          <div className="relative mb-4">
            <input
              value={formData.confirmpassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmpassword: e.target.value });
              }}
              placeholder="Confirm Password"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <select
              value={formData.gender}
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
              className="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
        <p className="text-xs text-gray-100 mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
