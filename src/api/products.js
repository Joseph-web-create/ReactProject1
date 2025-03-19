import axiosInstance from "../utils/axiosInstance";

export const getProductsCategories = async () => {
  return await axiosInstance.get("/products/category-list");
};

export const getAllProducts = async () => {
  return await axiosInstance.get("/products");
};

export const getAllProductsByCategory = async (categoryName) => {
  return await axiosInstance.get(`/products/category/${categoryName}`);
};

export const getaSingleProduct = async (productId) => {
  return await axiosInstance.get(`/products/${productId}`);
};

export const searchProducts = async (searchQuery) => {
  return await axiosInstance.get(`/products/search?q=${searchQuery}`);
};
