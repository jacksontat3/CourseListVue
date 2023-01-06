import axios from "axios";
export default axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? "http://localhost/courselist" : "/courselist",
  baseURL: 'http://localhost:3005/courselist/',
  headers: { "Content-Type": "application/json" }
});