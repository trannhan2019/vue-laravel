import axiosClient from './axiosClient';

export const getAll = ()=>{
    const url = '/products'
    return axiosClient.get(url)
}

export const addProduct = (data)=>{
    const url = '/products'
    return axiosClient.post(url,data)
}