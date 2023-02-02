import React from "react";

const CartProduct = ({ product }) => {
  const { id, quantity, name, price } = product;

  return (
    <div className="product-data">
      <p>ID: {id}</p>
      <div className="product-data-details">
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <p>Price: {price}$</p>
      <p>Total price: {price * quantity}$</p>
    </div>
  );
};

export default CartProduct;
