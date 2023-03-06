import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

    { name: 'Card', path: "/", component: () => import('./components/Card.vue') },

];

const history = createWebHashHistory();

const router = createRouter({
    history,
    routes,
});

export default router;