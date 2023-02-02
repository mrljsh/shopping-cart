import React from "react";
import QuantityInput from "./QuantityInput";

const CartProduct = ({ product, handleQuantity }) => {
  const { id, quantity, name, price, image } = product;

  return (
    <div className="product-data">
      <img src={image} alt={name} className="product-data-image" />
      <div className="product-data-details">
        <p>{name}</p>
      </div>
      <QuantityInput
        id={id}
        quantity={quantity}
        handleQuantity={handleQuantity}
      />
      <div className="product-data-prices">
        <p>Price: {price}$</p>
        <p>Qty price: {price * quantity}$</p>
      </div>
    </div>
  );
};

export default CartProduct;
