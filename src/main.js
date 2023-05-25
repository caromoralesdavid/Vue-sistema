import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/router.js';

import RouterLink from '@/components/RouterLink.vue';
import RouterView from '@/components/RouterView.vue';

const app = createApp(App);
app.use(createPinia());

// Verificar si los componentes ya están registrados
if (!app.component('RouterLink')) {
    app.component('RouterLink', RouterLink);
}
if (!app.component('RouterView')) {
    app.component('RouterView', RouterView);
}

app.use(router);
app.mount('#app');





