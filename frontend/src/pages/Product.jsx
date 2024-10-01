import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { allData } from "../assets/sample/Sampledata";
const Product = () => {
  const [maindata, setmaindata] = useState([]);
  function setdata() {
    setmaindata(allData);
  }
  useEffect(() => {
    setdata();
  }, [maindata]);
  return (
    <div>
      <section class="text-white body-font min-h-[72vh] flex flex-col justify-center">
        <div class="container px-3 py-4 mx-auto">
          <div className="w-full flex items-center justify-center"></div>
          <div className="flex flex-row items-center justify-center w-full m-[2rem]">
            <h1 className="text-[2rem] font-bold">Our BLogs are here</h1>
          </div>
          <div class="flex flex-wrap  mb-4 py-2 items-center justify-center  -m-4">
            {maindata.map((data, index) => {
              return <Cards key={index} data={data} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
