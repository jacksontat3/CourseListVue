import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === 'development' ? "http://localhost/" : "/jacksonfrontend/",
  mode: "history",
  routes: [
    {
      path: "/"
      ,alias: "/courses"
      ,name: "courses"
      ,component: () => import("./components/CourseList")
    }
  ]
});