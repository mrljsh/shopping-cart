import React from "react";
import { useParams } from "react-router-dom";
import fetchProduct from "./../../fetchProduct";

const Details = () => {
  const { id } = useParams();
  const details = fetchProduct(id);
  const { name, price, image } = details[0];

  return <div>{name}</div>;
};

export default Details;
