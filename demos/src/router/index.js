import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/animated-count-demo',
      name: 'animated-count-demo',
      component: () => import('../views/AnimatedCountDemo.vue'),
    },
    {
      path: '/article-view-demo',
      name: 'article-view-demo',
      component: () => import('../views/ArticleViewDemo.vue'),
    },
    {
      path: '/employer-card-demo',
      name: 'employer-card-demo',
      component: () => import('../views/EmployerCardDemo.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
