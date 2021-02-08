/*
 * @Author: your name
 * @Date: 2021-01-19 16:12:13
 * @LastEditTime: 2021-02-03 16:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueProject\vue-element-ad\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
const routes = [
  {
    path: '/',
    component: () => import('@/views/common/Main'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },{
        path: '/mediaItems',
        name: 'mediaItems',
        component: () => import('@/views/mediaItems'),
      },{
        path: '/addMedia',
        name: 'addMedia',
        component: () => import('@/views/addMedia'),
      },{
        path: '/Dock',
        name: 'Dock',
        component: () => import('@/views/Dock'),
      },{
        path: '/financialInfo',
        name: 'financialInfo',
        component: () => import('@/views/financialInfo'),
      },{
        path: '/applyWithdraw',
        name: 'applyWithdraw',
        component: () => import('@/views/applyWithdraw'),
      },{
        path: '/withdrawRecord',
        name: 'withdrawRecord',
        component: () => import('@/views/withdrawRecord'),
      },{
        path: '/',
        name: 'Home',
        component: Home,
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
