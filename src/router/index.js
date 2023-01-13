import { createRouter, createWebHistory } from 'vue-router'
import General from '../views/General.vue'
import Users from '../views/Users.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'General',
            component: General
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        }
    ]
})

export default router
