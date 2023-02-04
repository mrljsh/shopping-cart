import React from "react";
import QuantityInput from "./QuantityInput";
import DeleteIcon from "./../../assets/trash-outline.svg";

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
      <img src={image} alt={name} className="product-data-image" />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            width="24px"
            heigh="24px"
          >
            <title>Trash</title>
            <path
              d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 112h352"
            />
            <path
              d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
