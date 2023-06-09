import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import './includes/firebase'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// https://vee-validate.logaretm.com/v4/
app.use(VeeValidatePlugin /*, { foo: 100 } */)

app.mount('#app')
