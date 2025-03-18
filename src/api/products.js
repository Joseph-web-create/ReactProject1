import axiosInstance from "../utils/axiosInstance";

export const getProductsCategories = async () => {
  return await axiosInstance.get("/products/category-list");
};

export const getAllProducts = async () => {
  return await axiosInstance.get("/products");
};