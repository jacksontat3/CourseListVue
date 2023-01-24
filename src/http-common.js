import axios from "axios";
export default axios.create({
  base: process.env.NODE_ENV === 'development' ? "http://localhost/course-jt/" : "/course-jt",
  headers: { "Content-Type": "application/json" }
});