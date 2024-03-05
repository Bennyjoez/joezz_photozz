import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: await import.meta.env.VITE_JOEZ_PHOTOZZ_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token to request headers if available
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
});

export default axiosInstance;
