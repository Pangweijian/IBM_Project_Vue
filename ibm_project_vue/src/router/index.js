import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue"
import Index from "../components/Index.vue"

Vue.use(VueRouter);

const routes = [
  {path:"/",redirect:'/login'},// 重定向地址
  {path: '/login', component:Login},
  {path: '/index', component:Index }
];

const router = new VueRouter({
  routes
});

export default router;
