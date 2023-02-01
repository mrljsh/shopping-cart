import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PS5Image from "./../../assets/images/ps5.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h2>BEST CONSOLES, BARGAIN PRICES</h2>
        <p>Check out our shop, see our prices!</p>
        <Link to={"/shop"}>
          <button>SHOP</button>
        </Link>
      </div>
      <div className="home-right">
        <img src={PS5Image} alt="" />
      </div>
    </div>
  );
};

export default Home;
