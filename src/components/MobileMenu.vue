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
          :to="link.path || '/' "
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
    <!-- 移动端菜单 -->
    <div
      class="mobile-menu"
      :class="{ 'open': isMobileMenuOpen }"
      @click.self="toggleMobileMenu"
    >
      <router-link
        v-for="(link, index) in validLinks"
        :key="link.path || index"
        :to="link.path || '/' "
        class="mobile-nav-link"
        @click="toggleMobileMenu"
        :class="{ 'active': $route.path === link.path }"
      >
        {{ link.text || '未命名链接' }}
      </router-link>
    </div>
    <!-- 遮罩层 -->
    <div
      class="mask"
      v-show="isMobileMenuOpen"
      @click="toggleMobileMenu"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from '@/store/dataStore';
import type { NavLink } from '@/types'; // 假设定义了导航链接的类型

const store = useStore();
const navLinks = store.navLinks as NavLink[];

// 添加数据过滤
const validLinks = computed(() => {
  return (navLinks || []).filter((link: NavLink) => {
    return link && typeof link === 'object' && 'path' in link;
  });
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value =!isMobileMenuOpen.value;
  store.toggleMobileMenu();
};
</script>

<style lang="scss" scoped>
.app-header {
  background: linear-gradient(135deg, #2a7de1, #1a4a8d);
  background: linear-gradient(to bottom, 
        rgba(0, 0, 0, 50%) 0%, 
        rgba(0, 0, 0, 20%)50%, 
        rgba(255, 255, 255, 0) 100%
    );
  padding: 1rem 0;
  position: absolute;
  width: 100vw;
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
      color: rgba(255, 255, 255, 0.9);
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
    border: 1px solid #FFF;
    border-radius: 7px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);

 .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px 0;
      background: white;
      transition: 0.3s;
    }
  }

 .mobile-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -250px;
    width: 250px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex - start;
    align-items: center;
    transition: left 0.3s ease - in - out;
    z-index: 999;
    padding-top: 4rem;
  }

 .mobile-menu.open {
    left: 0;
  }

 .mobile-nav-link {
    color: #333;
    text-decoration: none;
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      background-color: #e0e7f1;
      color: #2a7de1;
    }
  }

 .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* 透明黑色 */
    z-index: 998; /* 低于菜单层 */
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