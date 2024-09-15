import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons';

import '@/index.css';
import router from '@/router'; // It is the default export so we don't need { }'s
import App from './App.vue';
// could be name '@/App.vue' because vite.config.js defines '@' as 'src' folder

library.add(faAngleDown);
library.add(faAngleUp);
// add the search maginifying glass to the library of available icons
library.add(faSearch);

const pinia = createPinia();

// name "app" just needs to match the name on the div element in index.html
createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
