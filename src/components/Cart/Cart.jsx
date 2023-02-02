import React from "react";
import CartProduct from "./CartProduct";
import "./Cart.css";
import fetchProduct from "../../fetchProduct";

const Cart = ({ cart }) => {
  const cartWithDetails = cart.map((product) => {
    const productData = fetchProduct(product.id);
    const { name, price } = productData[0];
    return { ...product, name: name, price: price };
  });

  const totalPrice = cartWithDetails.reduce(
    (sum, obj) => sum + obj.quantity * obj.price,
    0
  );

  return (
    <div className="cart">
      <h1>Your shopping cart</h1>
      <div className="cart-wrapper">
        {cartWithDetails.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>
      <p>Total price: {totalPrice}$</p>
    </div>
  );
};

export default Cart;
