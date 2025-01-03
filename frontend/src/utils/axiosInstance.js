// src/utils/axiosInstance.js
import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8070/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed
  },
});

// Optional: Add interceptors for request/response handling
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
    
      if (!['/customer/login', '/customer/register'].includes(config.url)) {
        if (token && token !== 'undefined' && token !== 'null') {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.error('Invalid or missing token:', token);
          throw new axios.Cancel('No valid access token found');
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  
  

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;
