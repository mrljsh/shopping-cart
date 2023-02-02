import React from "react";

const QuantityInput = ({ id, quantity, handleQuantity }) => {
  const handleBtn = (operator) => {
    if (operator === "-") {
      handleQuantity(id, quantity - 1);
    } else {
      handleQuantity(id, quantity + 1);
    }
  };

  return (
    <div className="quantity-input">
      <button className="quantity-btn" onClick={() => handleBtn("-")}>
        -
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        className="quantity-number"
      />
      <button className="quantity-btn" onClick={() => handleBtn("+")}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
