import React from "react";
import { useParams } from "react-router-dom";
import fetchProduct from "./../../fetchProduct";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const details = fetchProduct(id);
  const { name, price, image } = details[0];

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={image}></img>
      </div>
      <div className="details-info">
        <h1>{name}</h1>
        <div className="price-container">
          <p className="price">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
