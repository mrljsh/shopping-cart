import React from "react";
import "./Products.css";
import PS5Image from "./../../assets/images/ps5.png";

const Products = ({ name, price, id, addToCart }) => {
  const handleAddButton = (id) => {
    addToCart({
      id: id,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <img src={PS5Image} />
      <h1>{name}</h1>
      <p>{price}$</p>
      <button onClick={() => handleAddButton(id)}>Add to cart</button>
    </div>
  );
};

export default Products;
