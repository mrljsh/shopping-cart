import React from "react";
import "./Products.css";
import PS5Image from "./../../assets/images/ps5.png";

const Products = ({ name, price }) => {
  return (
    <div className="product-card">
      <img src={PS5Image} />
      <h1>{name}</h1>
      <p>{price}$</p>
      <button>Add to card</button>
    </div>
  );
};

export default Products;
