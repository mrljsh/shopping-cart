import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Shop</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
