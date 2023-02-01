import React, { useEffect } from "react";
import productData from "../../productData";
import Products from "./Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      {productData.map((product) => (
        <Products name={product.name} price={product.price} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
