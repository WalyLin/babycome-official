<template>
  <header class="app-header">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="BABYCOME">
      </router-link>

      <!-- 桌面导航 -->
      <nav class="desktop-nav">
        <router-link 
          v-for="(link, index) in validLinks"
          :key="link.path || index"
          :to="link.path || '/'"
          class="nav-link"
          :class="{ 'active': $route.path === link.path }"
        >
          {{ link.text || '未命名链接' }}
        </router-link>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        aria-label="切换菜单"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from '@/store/dataStore'

const store = useStore()
const navLinks = store.navLinks
// 添加数据过滤
const validLinks = computed(() => {
  return (store.navLinks || []).filter(link => {
    return link && typeof link === 'object' && 'path' in link
  })
})

const toggleMobileMenu = () => {
  store.toggleMobileMenu()
}
</script>

<style lang="scss" scoped>
.app-header {
  background: linear-gradient(135deg, #2a7de1, #1a4a8d);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  .desktop-nav {
    display: flex;
    gap: 2rem;

    .nav-link {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      transition: opacity 0.3s;
      position: relative;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: white;
        }
      }
    }
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;

    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px 0;
      background: white;
      transition: 0.3s;
    }
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }

  .mobile-menu-btn {
    display: block !important;
  }
}
</style>