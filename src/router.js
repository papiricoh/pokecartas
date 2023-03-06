import { createRouter, createWebHashHistory } from "vue-router";
import Card from "./components/Card.vue";
import Default from './components/Default.vue'

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

];

const history = createWebHashHistory();

const router = createRouter({
    history,
    routes,
});

export default router;