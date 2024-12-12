import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import DriverDetail from '../views/DriverDetail.vue';
import next from '../views/next.vue';

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/driver/:id', name: 'DriverDetail', component: DriverDetail, props: true },
    { path: '/driver/:id/journey', name: 'JourneyDetails', component: next, props: true } // New route
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
