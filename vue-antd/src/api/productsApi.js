import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = "/api/products";
  return axiosClient.get(url);
};

export const addProduct = (data) => {
  const url = "/api/products";
  return axiosClient.post(url, data);
};
