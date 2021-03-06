import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/pc/Home.vue'
import mHome from '../views/m/mHome.vue'

// 根据不同的设备重定向到不同URL
const redirectPath = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent) ? '/mHome' : 'Home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: redirectPath
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {type: 'pc'}
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../components/menu/pcIndex.vue'),
    meta: {type: 'pc'}
  },
  {
    path: '/mHome',
    name: 'mHome',
    component: mHome,
    meta: {type: 'm'}
  },
  {
    path: '/mMenu',
    name: 'mMenu',
    component: () => import(/* webpackChunkName: "menu" */ '../components/menu/mIndex.vue'),
    meta: {type: 'm'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
