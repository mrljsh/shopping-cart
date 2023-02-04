import React from "react";

const QuantityInput = ({ quantity, handleQuantity }) => {
  const handleBtn = (operator) => {
    if (operator === "-") {
      handleQuantity(quantity - 1);
    } else {
      handleQuantity(quantity + 1);
    }
  };

  const handleInput = (e) => {
    handleQuantity(+e.value);
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
        onChange={(e) => handleInput(e.target)}
      />
      <button className="quantity-btn" onClick={() => handleBtn("+")}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
