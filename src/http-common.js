import axios from "axios";
// var AXIOS = {};

// if( process.env.NODE_ENV === 'development' ){
//   AXIOS = {
//     baseURL: "http://localhost:3027/course-jt/",
//     headers: { "Content-Type": "application/json" }
//   }
// } else {
//   AXIOS =  {
//     base: "/course-jt",
//     headers: { "Content-Type": "application/json" }
//   }
// }

// export default axios.create(AXIOS);

/*** works locally ***/
// export default axios.create({
//   baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3027/course-jt/" : "/course-jt",
//   headers: { "Content-Type": "application/json" }
// });

/*** works aws ***/
export default axios.create({
  base: process.env.NODE_ENV === 'development' ? "http://localhost/" : "/course-jt",
  headers: { "Content-Type": "application/json" }
});