import HomePair from './components/HomePair.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "HomePair",
        component: HomePair,
        path: "/",
    },

    {
        name: "SignUp",
        component: SignUp,
        path: "/signup"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;