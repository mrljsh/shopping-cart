import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
      </div>
    </div>
  );
};

export default Navbar;
