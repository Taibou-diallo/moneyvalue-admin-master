import ViewPair from './components/pairs/ViewPair.vue'
import SignIn from './components/SignIn.vue'
import AddPair from './components/pairs/AddPair.vue'
import ViewConversion from './components/pairs/ViewConversion.vue'
import addCurrency from './components/pairs/addCurrency.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "ViewPair",
        component: ViewPair,
        path: "/pairs/view",
    },

    {
        name: "SignIn",
        component: SignIn,
        path: "/"
    },

    {
        name: "AddPair",
        component: AddPair,
        path: "/pairs/addpair"
    },

    {
        name: "ViewConversion",
        component: ViewConversion,
        path: "/pairs/conversion"
    },

    {
        name: "addCurrency",
        component: addCurrency,
        path: "/pairs/addcurrency"
    }



];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;