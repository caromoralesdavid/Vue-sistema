import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Registros.vue';
import ResetPassword from '../views/resetPassword.vue';
import LoginView from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import CrearUsuario from '../views/CrearUsuario.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/CrearUsuario',
    name: 'CrearUsuario',
    component: CrearUsuario
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
