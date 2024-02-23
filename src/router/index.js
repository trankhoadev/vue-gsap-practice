import { createRouter, createWebHistory } from 'vue-router'

/* HOME PAGE */
import HomeView from '@/views/HomeView.vue'

/* Lesson page here */
import Lesson_1 from '@/views/Lesson_1.vue'
import DemoView from '@/views/DemoView.vue'
import ErrorNotFound from '@/views/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/demo',
    name: 'Demo',
    component: DemoView
  },

  {
    path: '/lesson_1',
    name: 'Lesson1',
    component: Lesson_1
  },

  /* Catch for page not found */
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: ErrorNotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
