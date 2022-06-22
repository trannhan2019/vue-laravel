import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = "/api/user";
  return axiosClient.get(url);
};
