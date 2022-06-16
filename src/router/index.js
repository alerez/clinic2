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
      path: '/ru/blog',
      name: '/ru/blog',
      component: () => import('@/views/Blog.vue'),
    },
    {
      path: '/ru/blog/article/:id',
      name: '/ru/blog/article/:id',
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
