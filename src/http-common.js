import axios from "axios";
export default axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://localhost/courselist" : "nodeapps/2022/jacksonbackend",
  headers: { "Content-Type": "application/json" }
});