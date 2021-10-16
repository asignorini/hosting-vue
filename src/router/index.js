import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./../components/Home.vue";
import Login from "./../components/Login.vue";
import Plans from "./../components/Plans.vue";

const routes = [
    {
        name: 'home',
        component: Home,
        path: '/'
    },
    {
        name: 'login',
        component: Login,
        path: '/login'
    },
    {
        name: 'plans',
        component: Plans,
        path: '/plans'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;