// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
	  {
	    path: '/about',
	    name: 'about',
	    component: () => import('@/views/HomePage.vue')
	  },
	  {
	    path: '/advantage',
	    name: 'advantage',
	    component: () => import('@/views/HomePage.vue')
	  },{
	    path: '/structure',
	    name: 'structure',
	    component: () => import('@/views/HomePage.vue')
	  },{
	    path: '/product',
	    name: 'product',
	    component: () => import('@/views/HomePage.vue')
	  },{
	    path: '/news',
	    name: 'news',
	    component: () => import('@/views/HomePage.vue')
	  }	  
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router