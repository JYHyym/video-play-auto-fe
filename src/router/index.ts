import { createRouter, createWebHistory } from 'vue-router'
import AccountsView from '@/views/AccountsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'loign' },
      children: [
        {
          path: 'login',
          name: 'login',
          alias: '', // 浏览器url 重命名
          component: () => import('../views/LoginView.vue')
        },
        {
          path:'/list',
          component: () => import('../views/MainView.vue'),
          children: [
            {
              path: 'ongoing/gk',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'ongoing/qs',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'ongoing/wc',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'ongoing/cx',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'done/gk',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'done/qs',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'done/wc',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'done/cx',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'deleted/gk',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'deleted/qs',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'deleted/wc',
              component: () => import('../components/ongoing/GKCmpt.vue')
            },
            {
              path: 'deleted/cx',
              component: () => import('../components/ongoing/GKCmpt.vue')
            }
          ]
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
