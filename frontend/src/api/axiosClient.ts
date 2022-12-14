import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:3001";

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosClient;
