// src/store/dataStore.js
import { defineStore } from 'pinia'
import commonApi from '@/api/common';



// 使用具名导出
export const useStore = defineStore('main', {
  state: () => ({
    isMobile: false,
    showMobileMenu: false,
    domain: import.meta.env.VITE_APP_IMAGE_DOMAIN,
    navLinks: [
      { text: '首页', path: '/', img: "@/assets/images/aa.png" },
      { text: '公司优势', path: '/advantage', img: "@/assets/images/aa.png" },
      { text: '组织架构', path: '/structure', img: "@/assets/images/aa.png" },
      { text: '套餐及报价', path: '/product', img: "@/assets/images/aa.png" },
      { text: '实时资讯', path: '/news', img: "@/assets/images/aa.png" },
      { text: '关于我们', path: '/about', img: "@/assets/images/aa.png" }
    ],
    config: {} // 用于存储从接口获取的配置
  }),
  actions: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    async fetchConfig() {
      // 尝试从 localStorage 中读取配置
      const storedConfig = localStorage.getItem('config');
      const expirationTime = 24 * 60 * 60 * 1000; // 24小时，单位毫秒

      if (storedConfig) {
        const parsedConfig = JSON.parse(storedConfig);
        const { configData, timestamp } = parsedConfig;

        // 判断是否未过期
        if (configData?.official_email && Date.now() - timestamp < expirationTime) {
          this.config = configData;
          return this.config;
        }
      }

      await commonApi.getConfigs().then((response) => {
        const newConfig = response.data;

        // 构造带时间戳的数据
        const configWithTimestamp = {
          configData: newConfig,
          timestamp: Date.now()
        };

        // 存入 localStorage
        localStorage.setItem('config', JSON.stringify(configWithTimestamp));
        this.config = newConfig;
      });

      return this.config
    }
  }
})