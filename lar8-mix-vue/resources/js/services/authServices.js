import axiosClient from "./axiosClient";

export const register = (credentials) => {
    const url = "/register";
    return axiosClient.post(url, credentials);
};
