// src/store/dataStore.js
import { defineStore } from 'pinia'
import commonApi from '@/api/common';



// 使用具名导出
export const useStore = defineStore('main', {
  state: () => ({
    isMobile: false,
    showMobileMenu: false,
    domain:'http://13.251.66.158/',
    navLinks: [
      { text: '首页', path: '/' , img:"@/assets/images/aa.png"},
      { text: '公司优势', path: '/advantage' , img:"@/assets/images/aa.png"},
      { text: '组织架构', path: '/structure' , img:"@/assets/images/aa.png"},
      { text: '套餐及报价', path: '/product' , img:"@/assets/images/aa.png"},
	  { text: '实时资讯', path: '/news' , img:"@/assets/images/aa.png"},
	  { text: '关于我们', path: '/about' , img:"@/assets/images/aa.png"}
    ],
    config:{} // 用于存储从接口获取的配置
  }),
  actions: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    async fetchConfig() {
      if(this.config.length > 0){
        return this.config
      }
      
      await commonApi.getConfigs().then((response) => {
        this.config = response.data
      });
      
      return this.config            
    }
  }
})