import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <nav>
      <Link to={"/"}>
        <p>CONSOLE STORE</p>
      </Link>
      <div className="right-nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <Link to={"/cart"} className="cart-button">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
