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
            path: '/',
            name: 'main',
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
            path: '/airpods',
            name: 'airpods',
            component: () => import('../pages/airpods-page/AirpodsPage.vue')
        },
        {
            path: '/merch/:category/:id',
            name: 'check',
            component: () => import('../pages/merch-page/MerchPage.vue')
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import('../pages/basket-page/BasketPage.vue')
        },
        {
            path: '/about_us',
            name: 'about',
            component: () => import('../pages/footer-pages/AboutPage.vue')
        },
        {
            path: '/support',
            name: 'support',
            component: () => import('../pages/footer-pages/SupportPage.vue')
        },
    ]
})

export default router;