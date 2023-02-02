import React, { useEffect } from "react";
import productData from "../../productData";
import Products from "./Products";
import "./Shop.css";

const Shop = ({ addToCart }) => {
  return (
    <div className="shop">
      {productData.map((product) => (
        <Products
          name={product.name}
          price={product.price}
          image={product.image}
          key={product.id}
          id={product.id}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
