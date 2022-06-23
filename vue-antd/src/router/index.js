import { createRouter, createWebHistory } from "vue-router";

import { useAuth } from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      name: "test",
      component: () => import("@/components/test/RefTemplate.vue"),
      meta: {
        authPage: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
      meta: {
        authPage: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/Register.vue"),
      meta: {
        authPage: true,
      },
    },
    {
      path: "/admin",
      name: "admin-layout",
      component: () => import("@/layouts/AdminLayout.vue"),
      redirect: { name: "admin-products" },
      children: [
        {
          path: "products",
          name: "admin-products",
          component: () => import("@/views/admin/product/Product.vue"),
        },
        {
          path: "products/add",
          name: "admin-productsAdd",
          component: () => import("@/views/admin/product/Add.vue"),
        },
        {
          path: "users",
          name: "admin-users",
          component: () => import("@/views/admin/user/User.vue"),
        },
        {
          path: "roles",
          name: "admin-roles",
          component: () => import("@/views/admin/Role.vue"),
        },
      ],
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.meta.requireAuth) {
    if (auth.authenticated) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  }

  if (to.meta.authPage) {
    if (!auth.authenticated) {
      next();
    } else {
      next(from);
    }
  }
});

export default router;
