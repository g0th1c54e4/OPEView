import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'

createApp(App).use(ElementPlus).use(router).use(createPinia()).mount('#app')
