// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useStore } from '@/store/dataStore'

const app = createApp(App)
app.use(createPinia())
app.use(router)

const store = useStore()
store.fetchConfig() // 获取配置数据

app.mount('#app')

