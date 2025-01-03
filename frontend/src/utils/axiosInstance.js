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



export default axiosInstance;
