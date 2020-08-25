import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect:'/user/queryall',
    children:[
      {
        path: '/user/queryall',
        name: '用户一览',
        component: () => import("@/views/User/UserQueryall.vue")
      },
      {
        path: '/user/add',
        name: '添加用户',
        component: () => import("@/views/User/UserAdd.vue")
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
