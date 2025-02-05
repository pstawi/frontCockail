import { createRouter, createWebHistory } from "vue-router";
import usersList from "../src/components/userList.vue";
import Register from "../src/components/Register.vue";
import Connexion from "@/components/connexion.vue";


const routes = [
    {path: "/home", component: usersList},
    {path: "/register", component: Register},
    {path: "/login", component: Connexion}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;