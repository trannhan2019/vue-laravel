import { createWebHistory, createRouter } from "vue-router";
import { storeToRefs } from "pinia";
import admin from "./admin";
import auth from "./auth";
import { useAuth } from "../stores/auth";

const routes = [...auth, ...admin];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = useAuth();
    const { authenticated } = storeToRefs(auth);
    if (to.meta.requireAuth) {
        if (authenticated) {
            next();
        } else {
            next({
                name: "login",
            });
        }
    }

    if (to.meta.authPage) {
        if (!authenticated) {
            next();
        } else {
            next(from);
        }
    }
});

export default router;
