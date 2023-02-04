import React from "react";
import "./AddToBag.css";

const AddToBag = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="add-to-bag-btn">
      Add to cart
    </button>
  );
};

export default AddToBag;
