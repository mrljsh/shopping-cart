import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import "./Cart.css";
import fetchProduct from "../../fetchProduct";

const Cart = ({ cart, handleQuantity, handleRemove }) => {
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    //if there is something in cart, cart is not empty, else it's empty
    cartWithDetails.length > 0 ? setCartEmpty(false) : setCartEmpty(true);
  }, [cart]);

  const cartWithDetails = cart.map((product) => {
    const productData = fetchProduct(product.id);
    const { name, price, image } = productData[0];
    return { ...product, name: name, price: price, image: image };
  });

  const totalPrice = cartWithDetails.reduce(
    (sum, obj) => sum + obj.quantity * obj.price,
    0
  );

  return (
    <div className="cart">
      <h1>Your shopping cart</h1>
      {cartEmpty ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-wrapper">
          {cartWithDetails.map((product, index) => (
            <CartProduct
              index={index}
              product={product}
              key={product.id}
              handleQuantity={handleQuantity}
              handleRemove={handleRemove}
            />
          ))}
          <p className="total-price">Total price: {totalPrice}$</p>
          <button className="checkout-btn" disabled="true">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
