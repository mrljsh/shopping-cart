import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (cart.filter((x) => x.id === product.id).length > 0) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + product.quantity,
            };
          } else {
            return cartItem;
          }
        })
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const handleQuantity = (id, newQuantity) => {
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: newQuantity,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  return (
    <div className="App">
      {console.log(cart)}
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} handleQuantity={handleQuantity} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
