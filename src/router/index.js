import { createRouter, createWebHistory } from 'vue-router'
import General from '../views/General.vue'
import Users from '../views/Users.vue'
import Groups from '../views/Groups.vue'
import Sort from '../views/Sort.vue'

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
        },
        {
            path: '/groups',
            name: 'Groups',
            component: Groups
        },
        {
            path: '/sort',
            name: 'Sort',
            component: Sort
        }

    ]
})

export default router
