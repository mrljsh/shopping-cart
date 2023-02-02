import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  //If product with id already exists in cart, add +1 quantity, else add product to cart
  const handleAddToCart = (product) => {
    cart.some((x) => x.id === product.id)
      ? setCart(
          cart.map((cartItem) => {
            //Check if this is item that already exists in cart, add new quantity or
            //do nothing
            return cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + product.quantity }
              : cartItem;
          })
        )
      : setCart([...cart, product]);
  };

  const handleQuantity = (id, newQuantity) => {
    setCart(
      cart.map((cartItem) => {
        //find item with specific id and set new quantity
        return cartItem.id === id
          ? { ...cartItem, quantity: newQuantity }
          : { ...cartItem };
      })
    );
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleQuantity={handleQuantity}
                handleRemove={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
