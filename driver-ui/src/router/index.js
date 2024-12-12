import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import DriverDetail from '../views/DriverDetail.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/driver/:id',
            name: 'DriverDetail',
            component: DriverDetail,
            props: true
        }
    ]
});

export default router;
