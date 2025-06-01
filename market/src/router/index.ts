import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Importe suas páginas normalmente
import Login from '@/pages/Auth/Login.vue';
//import Dashboard from '@/pages/Dashboard.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home', 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guard global de autenticação
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;