import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from './pages/RegisterPage.vue';
import Login from './pages/login.vue';
import Dashboard from './pages/dashboard.vue';
import MasterLayout from './components/MasterLayout.vue';
import Tasks from './pages/tasks.vue';
import CreateTask from './pages/createTask.vue';

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
    },
    {
        path: '/',
        component: MasterLayout,
        children: [
            {
                path: '/',
                component: Dashboard,
                name: 'dashboard',
            },
            {
                path: '/tasks',
                component: Tasks,
                name: 'tasks',
            },
            {
                path: '/create-task',
                component: CreateTask,
                name: 'createTask',
            }
        ]
    }
    

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;