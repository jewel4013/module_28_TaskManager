import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createPinia } from 'pinia';

const pinia = createPinia();
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
