import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import image2 from "/life.jpg";
const Homepagecard2 = () => {
  return (
    <div>
      <div className="card bg-base-100 sm:m-2 w-96 h-[70vh] shadow-xl">
        <figure>
          <Link to="/product">
            <img src={image2} alt="phones" />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Shoes!</h2>
          <p className="text-white">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagecard2;
