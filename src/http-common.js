import axios from "axios";

/*** works locally ***/
// export default axios.create({
//   baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3027/course-jt/" : "/course-jt",
//   headers: { "Content-Type": "application/json" }
// });

/*** works on aws ***/
export default axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3027/courses-jt" : "/course-jt",
  headers: { "Content-Type": "application/json" }
});