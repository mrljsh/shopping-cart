import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import AddToBag from "./AddToBag";

const Products = ({ product, addToCart }) => {
  const { name, price, image, id } = product;

  const handleAddButton = () => {
    addToCart({
      id: id,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <Link to={`./${id}`}>
        <img src={image} />
      </Link>
      <h1>{name}</h1>
      <p>{price}$</p>
      <AddToBag handleClick={handleAddButton} />
    </div>
  );
};

export default Products;
