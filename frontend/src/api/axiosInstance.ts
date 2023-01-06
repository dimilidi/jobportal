import axios, { AxiosInstance } from 'axios'

const BASE_URL = 'https://jobsy-test.onrender.com'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export default axiosInstance
