import { createRouter, createWebHistory } from 'vue-router'

/* HOME PAGE */
import HomeView from '@/views/HomeView.vue'

/* Lesson page here */
import DemoView from '@/views/DemoView.vue'
import ErrorNotFound from '@/views/ErrorNotFound.vue'

/* GSAP */
import Lesson1 from '@/views/GSAP/Lesson_1.vue'
import RedirectGsap from '@/views/GSAP/RedirectPageGsap.vue'
import ScrollTrigger from '@/views/GSAP/ScrollTrigger.vue'
import ScrollSmoother from '@/views/GSAP/ScrollSmoother.vue'
import SplitText from '@/views/GSAP/SplitText.vue'

/* Authentication */
import RedirectAuthentication from '@/views/authentication/RedirectPageAuthentication.vue'
import FbAuthentication from '@/views/authentication/FacebookAuthentication.vue'
import GooleAuthentication from '@/views/authentication/GoogleAuthentication.vue'
import BackendLogin from '@/views/authentication/BackendLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/gsap',
    name: 'RedirectGsap',
    component: RedirectGsap
  },

  {
    path: '/demo',
    name: 'Demo',
    component: DemoView
  },

  {
    path: '/gsap/lesson-1',
    name: 'Lesson1',
    component: Lesson1
  },

  {
    path: '/gsap/scroll-trigger',
    name: 'ScrollTrigger',
    component: ScrollTrigger
  },

  {
    path: '/gsap/scroll-smoother',
    name: 'ScrollSmoother',
    component: ScrollSmoother
  },

  {
    path: '/gsap/split-text',
    name: 'SplitText',
    component: SplitText
  },

  /* Authentication */
  {
    path: '/login',
    name: 'RedirectAuthentication',
    component: RedirectAuthentication
  },

  {
    path: '/login/facebook',
    name: 'FbAuthentication',
    component: FbAuthentication
  },

  {
    path: '/login/google',
    name: 'GooleAuthentication',
    component: GooleAuthentication
  },

  {
    path: '/login/backend-jwt',
    name: 'BackendAuthentication',
    component: BackendLogin
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
