import React from "react";

const CartProduct = ({ product }) => {
  const { id, quantity, name, price, image } = product;

  return (
    <div className="product-data">
      <img src={image} alt={name} className="product-data-image" />
      <div className="product-data-details">
        <p>{name}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="product-data-prices">
        <p>Price: {price}$</p>
        <p>Qty price: {price * quantity}$</p>
      </div>
    </div>
  );
};

export default CartProduct;
