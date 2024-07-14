import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '@/index.css';
import router from '@/router'; // It is the default export so we don't need { }'s
import App from './App.vue';
// could be name '@/App.vue' because vite.config.js defines '@' as 'src' folder

// add the search maginifying glass to the library of available icons
library.add(faSearch);

// name "app" just needs to match the name on the div element in index.html
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
