import axios from "axios";

/*** works locally ***/
// export default axios.create({
//   baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3027/course-jt/" : "/course-jt",
//   headers: { "Content-Type": "application/json" }
// });

/*** works aws ***/
export default axios.create({
  base: process.env.NODE_ENV === 'development' ? "http://localhost:3027/course-jt" : "/course-jt",
  headers: { "Content-Type": "application/json" }
});