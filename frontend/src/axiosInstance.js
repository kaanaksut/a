import axios from 'axios';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend API URL'si
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (userInfo && userInfo.token) {
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
