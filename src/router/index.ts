import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () =>
      import(/* webpackChunkName: "basic" */ '../views/Basic.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/Vuex.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router