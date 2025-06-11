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
	    name: 'About',
	    component: () => import('@/views/About.vue')
	  },
	  {
	    path: '/advantage',
	    name: 'Advantage',
	    component: () => import('@/views/Advantage.vue')
	  },{
	    path: '/structure',
	    name: 'Structure',
	    component: () => import('@/views/Structure.vue')
	  },{
	    path: '/product',
	    name: 'Product',
	    component: () => import('@/views/Product.vue')
	  },{
	    path: '/news',
	    name: 'News',
	    component: () => import('@/views/News.vue')
	  }	,{
	    path: '/news-detail/:id',
	    name: 'NewsDetail',
	    component: () => import('@/views/NewsDetail.vue')
	  },{
	    path: '/images/:id',
	    name: 'Images',
	    component: () => import('@/views/Images.vue')
	  }	  
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router