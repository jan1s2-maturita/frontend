// src/api/client.js
import axios from "axios";
const API_BASE_URL = "https://it2125-maturita.kube.sspu-opava.cz/api"
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Ensures cookies are sent with requests
});

apiClient.interceptors.request.use((config) => {
  // Inject token from cookie into headers
  //const token = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
  //if (token) config.headers["x-token"] = token;
  return config;
});

export default apiClient;

