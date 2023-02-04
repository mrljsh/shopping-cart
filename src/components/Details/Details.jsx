import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fetchProduct from "./../../fetchProduct";
import "./Details.css";
import QuantityInput from "../Cart/QuantityInput";

const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const details = fetchProduct(id);
  const { name, price, image } = details[0];

  const handleQuantity = (id, quantity) => {
    setQuantity(quantity);
  };

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
        <div className="add-to-cart">
          <QuantityInput
            handleQuantity={handleQuantity}
            id={id}
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
