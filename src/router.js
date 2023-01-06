import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  base: '/courselist',
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