<template>
  <div class="main-layout">
    <!-- 头部导航 -->
    <Header />
    
    <!-- 页面内容 -->
    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <Footer />

    <!-- 移动端菜单 -->
    <MobileMenu v-if="isMobile" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/store/dataStore'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MobileMenu from '@/components/MobileMenu.vue'

const store = useStore()
const isMobile = computed(() => store.isMobile)
console.info(isMobile.value)
</script>

<style lang="scss">


.main-layout {
  display: flex;
  justify-content: center;
  flex-direction: column;     
    min-height: 100vh;
    max-width: 1920px;
    margin: auto;
  .content-wrapper {
    flex: 1;
    
  }
}

// 页面过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>