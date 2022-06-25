const admin = [
    {
        path: "/admin",
        name: "admin-layout",
        component: () => import("../layouts/AdminLayout.vue"),
        redirect: { name: "admin-products" },
        children: [
            {
                path: "products",
                name: "admin-products",
                component: () => import("../views/admin/product/Product.vue"),
            },
            {
                path: "products/add",
                name: "admin-productsAdd",
                component: () => import("../views/admin/product/Add.vue"),
            },
            {
                path: "users",
                name: "admin-users",
                component: () => import("../views/admin/user/User.vue"),
            },
            {
                path: "roles",
                name: "admin-roles",
                component: () => import("../views/admin/role/Role.vue"),
            },
        ],
        meta: {
            requireAuth: true,
        },
    },
];

export default admin;
