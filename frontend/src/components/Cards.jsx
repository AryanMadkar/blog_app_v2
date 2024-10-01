import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const gotosinglepage = () => {
    navigate(`/singleproduct/${data.id}`);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="card m-2 h-[60vh] bg-base-100 w-96 shadow-xl">
      <figure>
        <Link to={`/singleproduct/${data.id}`}>
          <img src={data.image} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{data.category}</h2>
        <p>{data.title}</p>
        <div className="m-2 card-actions justify-end">
          <button onClick={gotosinglepage} className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
