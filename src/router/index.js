import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../pages/login-page/LoginPage.vue')
        },
        {
            path: '/home',
            name: 'main',
            component: () => import('../pages/main-page/MainPage.vue')
        },
    ]
})

export default router;