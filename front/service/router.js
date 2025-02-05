import { createRouter, createWebHistory } from "vue-router";
import usersList from "../src/components/userList.vue";
import Register from "../src/components/Register.vue";


const routes = [
    {path: "/home", component: usersList},
    {path: "/register", component: Register}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;