import React from "react";
import productData from "../../productData";

const CartProduct = ({ product }) => {
  const { id, quantity, name, price } = product;
  console.log(product);

  return (
    <div className="product-data">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}$</p>
      <p>Total price: {price * quantity}$</p>
    </div>
  );
};

export default CartProduct;
