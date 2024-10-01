import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allData } from "../assets/sample/Sampledata";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";

const Singleproduct = () => {
  const [maindata, setmaindata] = useState([]);
  let { id } = useParams();
  let newid = Number(id);
  const data = allData.find((item) => item.id === newid);
  useEffect(() => {
    console.log(maindata);
    setmaindata(data);
  }, [data]);

  return (
    <div className="flex justify-start mt-2   p-[2rem] rounded-lg items-center min-h-[80vh] w-full flex-col">
      <div className="text-[2rem] font-bold">{maindata.title}</div>
      <div className="flex flex-col items-center justify-center mt-2">
        <img
          src={"https://avatar.iran.liara.run/public"}
          className="h-[5rem] w-[5rem] rounded-full"
        />
        <h1>{maindata.author}</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={maindata.image} className="h-[50vh] rounded-lg w-auto" />
        <div className="flex flex-row justify-center items-center my-2">
          {maindata.tags?.map((data, index) => (
            <div
              className="flex  flex-col justify-center items-center px-4 hover:scale-105 cursor-pointer hover:bg-black hover:text-green font-bold transition-all duration-300 bg-slate-900 rounded-lg p-2 hover:border m-2"
              key={index}
            >
              {data}
            </div>
          ))}
        </div>
      </div>
      <div className="text-[1.2rem] text-center flex flex-col justify-center items-center  leading-relaxed  rounded-lg p-2 font-bold m-2">
        <h1>{maindata.content}</h1>
        <div className="flex flex-row gap-[2rem] justify-center items-center mt-2">
          <Link
            to={"https://www.facebook.com"}
            className="text-[2rem] p-2 bg-orange-500 hover:scale-105  text-blue-900 hover:text-green transition-all duration-300 rounded-full"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            to={"https://www.instagram.com"}
            className="text-[2rem] p-2 bg-white text-orange-500 hover:scale-105  hover:text-green transition-all duration-300 rounded-full"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            to={"https://www.twitter.com"}
            className="text-[2rem] p-2 bg-black border-2 border-white hover:scale-105  text-blue-900 hover:text-green transition-all duration-300 rounded-full"
          >
            <FaTwitterSquare />
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="text-[1.2rem] flex flex-row items-center gap-2 justify-center font-bold ">
          Blog created at:{" "}
          <h1 className="bg-slate-700 p-2 rounded-2xl">
            {maindata.created_at}
          </h1>
        </div>
        <div className="text-[1.2rem] flex flex-row items-center gap-2 justify-center font-bold ">
          Blog updated at:{" "}
          <h1 className="bg-slate-700 p-2 rounded-2xl">
            {maindata.updated_at}
          </h1>
        </div>
      </div>
      <div className="w-full h-[2px] mt-4 bg-white"></div>
    </div>
  );
};

export default Singleproduct;
