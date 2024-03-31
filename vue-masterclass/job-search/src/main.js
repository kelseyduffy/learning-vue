import { createApp } from 'vue'

import '@/index.css'
import App from './App.vue'
// could be name '@/App.vue' because vite.config.js defines '@' as 'src' folder

// name "app" just needs to match the name on the div element in index.html
createApp(App).mount('#app')
