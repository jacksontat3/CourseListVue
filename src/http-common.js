import axios from "axios";
export default axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3027/course-jt" : "/course-jt",
  headers: { "Content-Type": "application/json" }
});