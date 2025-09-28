import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-statushub.onrender.com/api", // backend Node
});

export default api;