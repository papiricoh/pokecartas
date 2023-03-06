import { createRouter, createWebHashHistory } from "vue-router";
import Card from "./components/Card.vue";
import Default from './components/Default.vue';
import Multiple from './components/Multiple.vue';

const routes = [

    {
        name: 'Card', 
        path: "/:id", 
        component: Card,
        props: true
    },
    {
        name: 'Default', 
        path: "/", 
        component: Default, 
    },
    {
        name: 'Multiple', 
        path: "/multiple/:num", 
        component: Multiple,
        props: true
    },

];

const history = createWebHashHistory();

const router = createRouter({
    history,
    routes,
});

export default router;