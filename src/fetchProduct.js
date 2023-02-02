import productData from "./productData";

const fetchProduct = (id) => {
  return productData.filter((product) => product.id === id);
};

export default fetchProduct;
