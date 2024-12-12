import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login.vue';
import DriverDetail from '../views/DriverDetail.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/driver/:id', name: 'DriverDetail', component: DriverDetail, props: true }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
