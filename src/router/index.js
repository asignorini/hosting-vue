import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./../components/Home.vue";
import Login from "./../components/Login.vue";
import Register from "./../components/Register.vue";
import Plans from "./../components/Plans.vue";
import Profile from "./../components/Profile.vue";
import AdminPlans from "./../components/AdminPlans.vue";
import Chats from "./../components/Chats.vue";
import CreatePlan from "./../components/CreatePlan.vue";
import EditPlan from "./../components/EditPlan.vue";

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
        name: 'register',
        component: Register,
        path: '/register'
    },
    {
        name: 'plans',
        component: Plans,
        path: '/plans'
    },
    //Admin routes
    {
        name: 'profile',
        component: Profile,
        path: '/admin/profile'
    },
    {
        name: 'adminPlans',
        component: AdminPlans,
        path: '/admin/plans'
    },
    {
        name: 'chats',
        component: Chats,
        path: '/admin/chats'
    },
    {
        name: 'createPlan',
        component: CreatePlan,
        path: '/admin/plans/create'
    },
    {
        name: 'editPlan',
        component: EditPlan,
        path: '/admin/plans/edit/:id'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;