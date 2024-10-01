import React from "react";
import Cards from "./../components/Cards";
import Homepagelower from "../components/Homepagelower";
import Homepagemid from "../components/Homepagemid";
import video from "/video1.mp4";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  flex flex-col sm:text-4xl text-3xl mb-4 font-medium text-white">
              <sapn className="mr-[1rem]">Welcome to the</sapn>
              THe river of knowledge{" "}
            </h1>
            <p className="mb-8 leading-relaxed">
              Blogging is a powerful tool for sharing knowledge, expressing
              ideas, and connecting with like-minded individuals. It serves as a
              platform for personal growth, professional development, and
              community building. Whether you're a hobbyist, entrepreneur, or
              expert, blogging can help you establish authority, drive traffic,
              and create lasting impact.
            </p>
            <div className="flex justify-center">
              <Link
                to={"/addblogpage"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Add blog
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video src={video} autoPlay loop muted className=" w-auto h-auto" />
          </div>
        </div>
      </section>
      <Homepagemid />
      <Homepagelower />
    </div>
  );
};

export default Home;
