
import Vue from "vue";
import type { RouteConfig } from 'vue-router';
import Router from 'vue-router'

Vue.use(Router);

const basicRoutes: Array<RouteConfig> = [
    {
        path: "/"
        ,alias: "/courses"
        ,name: "courses"
        ,component: () => import("./components/CourseList.vue")
    }
]

const router = new Router({
    base: process.env.NODE_ENV === 'development' ? "http://localhost/" : "/jacksonfrontend/",
    mode: "history",    
    routes: basicRoutes 
})

export default router;