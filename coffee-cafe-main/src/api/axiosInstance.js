// src/api/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Your Express server URL
  withCredentials: true, // if using cookies/session
});

export default axiosInstance;
