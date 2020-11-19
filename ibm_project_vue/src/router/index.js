import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue"
import Index from "../components/Index.vue"
import Home from "../components/Home.vue"
import Addinfo from "../components/Addinfo.vue"

Vue.use(VueRouter);

const routes = [
  {path:"/",redirect:'/login'},// 重定向地址
  {path: '/login', component:Login},
  
  //访问 home 重定向到 index  
  {path: '/home', component: Home, 
    redirect: '/index',
    children: [{path: '/index', component:Index },{path: '/add', component: Addinfo }] },
];

const router = new VueRouter({
  routes
});

// //挂载路由导航守卫
// router.beforeEach((to,from,next) => {
//   //to 将要访问的路径； 
//   //from 从哪个路径跳转而来； 
//   //next 是一个函数，表示放行{ next（）放行；next（'/login'）强制跳转}
//   //如果用户访问登录页，直接放行
//   if(to.path == '/login') return next()
//   //从sessionStorage 中获取 token 值
//   const tokenStr = window.sessionStorage.getItem('token')
//   //没有 token 强制跳转到登录页面
//   if (!tokenStr) return next('/login')
//   //有 token 直接放行
//   next()
// })

export default router;
