// middleware/auth.ts
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';
export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const authStore = useAuthStore();
  // If the auth store hasn't been initialized yet, try to initialize it.
  // This helps when a user directly accesses a protected route or refreshes the page.
  console.log(authStore.isAuthenticated)
  if (!authStore.isAuthenticated && authStore.user === null) {
    await authStore.initializeAuth();
  }

  // Define routes that do NOT require authentication
  const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/recommend'
  ]; // Add your public routes here

  // Check if the current route requires authentication
  const requiresAuth = !publicRoutes.includes(to.path);

  if (requiresAuth && !authStore.isAuthenticated) {
    // If route requires auth and user is not authenticated, redirect to login
    return navigateTo('/login');
  }

  // If user is authenticated and tries to access login/register, redirect to home
  if (authStore.isAuthenticated && publicRoutes.includes(to.path)) {
    return router.back();
  }
});