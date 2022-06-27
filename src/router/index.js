import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ru'
    },
    {
      path: '/ru',
      name: '/ru/main',
      component: () => import('@/views/Main.vue'),
    },
    {
      path: '/ru/about-us',
      name: '/ru/about-us',
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/ru/contacts',
      name: '/ru/contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/ru/equipment',
      name: '/ru/equipment',
      component: () => import('@/views/Blog.vue'),
    },
    {
      path: '/ru/equipment/article/:id',
      name: '/ru/equipment/article/:id',
      component: () => import('@/views/Article.vue')
    },
    {
      path: '/ru/procedures',
      name: '/ru/procedures',
      component: () => import('@/views/procedures.vue')
    },
    {
      path: '/ru/procedures/:id',
      name: '/ru/procedures/:id',
      component: () => import('@/views/procedures.vue')
    },
    {
      path: '/ru/procedures/article/:id',
      name: '/ru/procedures/article/:id',
      component: () => import('@/views/Article.vue')
    },
    {
      path: '/he',
      name: '/he/main',
      component: () => import('@/views/Main.vue'),
    },
    {
      path: '/he/about-us',
      name: '/he/about-us',
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/he/contacts',
      name: '/he/contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/he/blog',
      name: '/he/blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/he/article/:id',
      name: '/he/article',
      component: () => import('@/views/Article.vue')
    }
  ]
})

export default router
