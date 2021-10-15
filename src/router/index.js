import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./../components/Home.vue";

const routes = [
    {
        name: 'home',
        component: Home,
        path: '/'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;