import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from './pages/RegisterPage.vue';
import Login from './pages/login.vue';

const routes = [
    {
        path: '/register',
        component: RegisterPage,
        name: 'RegisterPage',
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;