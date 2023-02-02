import React from "react";
import "./Products.css";

const Products = ({ name, price, image, id, addToCart }) => {
  const handleAddButton = (id) => {
    addToCart({
      id: id,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <img src={image} />
      <h1>{name}</h1>
      <p>{price}$</p>
      <button onClick={() => handleAddButton(id)}>Add to cart</button>
    </div>
  );
};

export default Products;
