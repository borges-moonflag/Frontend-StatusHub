import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6030/api",
  withCredentials: true,
});

export default api;