import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Release',
    name: 'Release',
    component: () => import(/* webpackChunkName: "about" */ '../views/Release.vue')
  },
  {
    path: '/SelfSupport',
    name: 'SelfSupport',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelfSupport.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "about" */ '../views/me')
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: () => import('../views/goods')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('../views/shoppingCart')
  },
  {
    path: '/demo/:id',
    name: '/demo',
    component: () => import('../views/demo')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
