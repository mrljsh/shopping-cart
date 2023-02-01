import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((product) => (
        <p>{JSON.stringify(product)}</p>
      ))}
    </div>
  );
};

export default Cart;
