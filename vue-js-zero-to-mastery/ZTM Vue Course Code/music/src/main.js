import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

import './assets/base.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  // function can fire multiple times, only initialize app once
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    // https://vee-validate.logaretm.com/v4/
    app.use(VeeValidatePlugin /*, { foo: 100 } */)

    app.mount('#app')
  }
})
