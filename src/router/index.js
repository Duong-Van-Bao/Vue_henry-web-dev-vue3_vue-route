import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Products from  '../components/Products.vue'
import About from '../components/About.vue'
import Error from '../components/Error.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error
    }
]

const router = createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes 
})

export default router