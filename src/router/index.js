import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout/index.vue'),
    redirect: 'search',
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/search/index.vue'),
      },
      {
        path: 'graph',
        name: 'graph',
        component: () => import('../views/graph/index.vue'),
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router