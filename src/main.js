import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue from 'vue';
import RouterLink from '@/components/RouterLink.vue';
import RouterView from '@/components/RouterView.vue';

Vue.component('RouterLink', RouterLink);
Vue.component('RouterView', RouterView);

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
