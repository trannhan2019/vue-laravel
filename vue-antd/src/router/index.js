import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin-layout',
      component: () => import('@/layouts/AdminLayout.vue'),
      redirect: { name: 'admin-products' },
      children: [
        {
          path: 'products',
          name: 'admin-products',
          component: () =>
            import('@/views/admin/product/Product.vue'),
        },
        {
          path: 'products/add',
          name: 'admin-productsAdd',
          component: () => import('@/views/admin/product/Add2.vue'),
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/User.vue'),
        },
        {
          path: 'roles',
          name: 'admin-roles',
          component: () => import('@/views/admin/Role.vue'),
        },
      ],
    },
  ],
});

export default router;
