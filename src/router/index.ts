import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '@/views/CreateView.vue'
import DetailBookView from '@/views/DetailBookView.vue'
import BookView from '@/views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'book',
      component: BookView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/detail/:id',
      name: 'book detail',
      component: DetailBookView,
    },
  ],
})

export default router
