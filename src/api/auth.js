import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (formData) => {
  return await axiosInstance.post("/auth/login", formData);
};
