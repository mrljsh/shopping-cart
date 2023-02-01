import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <nav>
      <Link to={"/"}>
        <p>CONSOLE STORE</p>
      </Link>
      <div className="right-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/cart"} className="cart-button">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
