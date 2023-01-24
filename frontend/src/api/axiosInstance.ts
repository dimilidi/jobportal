import axios, { AxiosInstance } from 'axios'

let BASE_URL
if (import.meta.env.PROD) {
  BASE_URL = 'https://jobportal-jobsy.onrender.com'
} else {
  BASE_URL = 'http://localhost:3001'
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export default axiosInstance
