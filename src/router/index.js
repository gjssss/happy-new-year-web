import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [
{
    path: '/',
    name: 'Index',
    component: () => import('../views/IndexPage.vue')
}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router