import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pageview',
    name: 'pagevieww',
    component: () => import( '../views/PageView.vue')
  },
  {
    path: '/saleview',
    name: 'salevieww',
    component: () => import( '../views/SaleView.vue')
  },
  {
    path: '/dash',
    component: () => import( '../views/DashView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
