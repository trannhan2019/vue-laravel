const auth = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/auth/Login.vue"),
        meta: {
            authPage: true,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/auth/Register.vue"),
        meta: {
            authPage: true,
        },
    },
];
export default auth;
