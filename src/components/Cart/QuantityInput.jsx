import React from "react";

const QuantityInput = ({ id, quantity, handleQuantity }) => {
  return (
    <div className="quantity-input">
      <button className="quantity-btn">-</button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        className="quantity-number"
      />
      <button className="quantity-btn">+</button>
    </div>
  );
};

export default QuantityInput;
