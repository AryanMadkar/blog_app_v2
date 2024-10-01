import React, { useState } from "react";
import Homepagecard from "./Homepagecard";
import { allData } from "../assets/sample/Sampledata";
import Homepagecard2 from "./Homepagecard2";
import Homepagecard3 from "./Homepagecard3";
const Homepagemid = () => {
  const [data, setData] = useState(allData);
  return (
    <div>
      {" "}
      <section className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-100 font-medium title-font text-2xl mb-2 sm:mb-0">
                Get your favourite blogs here
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Blogging is a powerful platform for sharing ideas, experiences,
                and expertise with a global audience. It helps build personal or
                business brands, fostering connections and driving engagement.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:m-4  mx-4 mb-10 mt-4">
            <Homepagecard />
            <Homepagecard2 />
            <Homepagecard3 />
          </div>
        </div>
        <div className="w-[89%] bg-white h-[1px] mx-auto"></div>
      </section>
    </div>
  );
};

export default Homepagemid;
