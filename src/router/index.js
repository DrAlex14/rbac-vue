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
      {
        path: '/user/update',
        name: '修改用户信息',
        component:() => import("@/views/User/UserUpdate.vue")
      },
      {
        path:"/role/queryall",
        name:"用户一览",
        component:()=> import("@/views/Role/RoleQueryall.vue")
      },
      {
        path:"/role/add",
        name:"添加角色",
        component:()=> import("@/views/Role/RoleAdd.vue")
      },
      {
        path:"/role/update",
        name:"修改角色信息",
        component:()=> import("@/views/Role/RoleUpdate.vue")
      },
      {
        path:"/role/querypermissons",
        name:"查看角色权限",
        component:()=> import("@/views/Role/QueryPermissons.vue")
      },
      {
        path:"/permissions/queryall",
        name:"查看所有权限",
        component:()=> import("@/views/permissions/PermissionQueryall.vue")
      },
      {
        path:"/permissions/authorization",
        name:"授权管理",
        component:()=> import("@/views/permissions/Authorization.vue")
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
