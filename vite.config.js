import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 需要安装 @types/node

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  // 路径解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets')
    },
    // 自动扩展文件类型
    extensions: ['.js', '.vue', '.json']
  },

  // 插件配置
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  
  // 开发服务器配置
  server: {
    port: 8080, // 指定端口
    open: true,  // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9502',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },

  // 构建配置
  build: {
    outDir: 'dist', // 输出目录
    assetsDir: 'static', // 静态资源目录
    sourcemap: false, // 生产环境关闭 sourcemap
    minify: 'terser', // 压缩工具
    chunkSizeWarningLimit: 1500, // 分块大小警告阈值
    
    // Rollup 配置
    rollupOptions: {
      output: {
        // 文件分块策略
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将 node_modules 依赖分块
            return id.toString().split('node_modules/')[1].split('/')[0]
          }
        },
        // 文件命名规则
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    
    // Terser 配置
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console
        drop_debugger: true // 移除 debugger
      }
    }
  },

  // CSS 预处理器配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/scss/viewport-tools" as *;
        @import "@/assets/styles/variables.scss";                   
        @import "@/assets/styles/global.scss";
        ` // 全局注入变量
      }
    },    
  },

  // 静态资源处理
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg'],

  // 依赖优化选项
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'] // 预构建依赖
  }
})