import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SekbidView from "../views/SekbidView.vue"
import GalleryView from "../views/GalleryView.vue"
import AboutView from "../views/AboutView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/sekbid',
    name: 'sekbid',
    component: SekbidView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
