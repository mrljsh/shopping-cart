import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <nav>
      <p>HARDWARE STORE</p>
      <div className="right-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <p>Cart ({cart.length})</p>
      </div>
    </nav>
  );
};

export default Navbar;
