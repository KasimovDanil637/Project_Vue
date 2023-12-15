import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/home-page/HomePage.vue')
        },
        {
            path: '/iphone',
            name: 'iphone',
            component: () => import('../pages/iphone-page/IphonePage.vue')
        },
        {
            path: '/ipad',
            name: 'ipad',
            component: () => import('../pages/ipad-page/IpadPage.vue')
        },
        {
            path: '/mac',
            name: 'mac',
            component: () => import('../pages/mac-page/MacPage.vue')
        },
        {
            path: '/watch',
            name: 'watch',
            component: () => import('../pages/watch-page/WatchPage.vue')
        },
        {
            path: '/check_merch/:category/:id',
            name: 'check',
            component: () => import('../pages/check-page/CheckPage.vue')
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import('../pages/basket-page/BasketPage.vue')
        },
    ]
})

export default router;