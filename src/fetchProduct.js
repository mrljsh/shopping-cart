import productData from "./productData";

const fetchProduct = (id) => {
  if (typeof id !== "number") {
    id = +id;
  }
  return productData.filter((product) => product.id === id);
};

export default fetchProduct;
