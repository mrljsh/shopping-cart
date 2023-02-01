import React from "react";
import "./Products.css";

const Products = ({ name, price }) => {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <p>{price}$</p>
    </div>
  );
};

export default Products;
