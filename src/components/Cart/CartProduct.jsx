import React from "react";
import QuantityInput from "./QuantityInput";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartProduct = ({ product, handleQuantity, index, handleRemove }) => {
  const { id, quantity, name, price, image } = product;

  const handleQuantityChange = (quantityInput) => {
    handleQuantity(id, quantityInput);
  };

  const handleRemoveClick = () => {
    handleRemove(index);
  };

  return (
    <div className="product-data">
      <Link to={`/shop/${id}`}>
        <img src={image} alt={name} className="product-data-image" />
      </Link>
      <div className="product-data-details">
        <p>{name}</p>
      </div>
      <QuantityInput
        id={id}
        quantity={quantity}
        handleQuantity={handleQuantityChange}
      />
      <div className="product-data-prices">
        <p>Price: {price}$</p>
        <p>Qty price: {price * quantity}$</p>
      </div>
      <div>
        <button onClick={handleRemoveClick} className="delete-button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
