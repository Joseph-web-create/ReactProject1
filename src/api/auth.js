import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (formData) => {
  return await axiosInstance.post("/auth/login", formData);
};

export const getAuthUser = async (accessToken) => {
  return await axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};