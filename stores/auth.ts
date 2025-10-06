import { defineStore } from 'pinia';

interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  address: string;
  bbcoin: number;
  tmccoin: number;
  currencyLists: [];
  uid: string;
  email: string;
  phone: string;
  avatar : string;
  memberType : string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as User | null, // Type as User or null
    token: null as string | null, // JWT token
  }),
  actions: {
    setAuth(token: string, user: User) {
      this.isAuthenticated = true;
      this.token = token;
      this.user = user;
    },

    clearAuth() {
      this.isAuthenticated = false;
      this.token = null;
      this.user = null;
    },

    async login(credentials: { username: string; password: string }) {
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials, // Send username and password
        });

        this.setAuth(response.token, response.user); // Update store state
        return true; // Indicate successful login
      } catch (error) {
        this.clearAuth(); // Clear auth state on failure
        throw error; // Re-throw to be caught by the component for error display
      }
    },

    async logout() {
      try {
        await $fetch('/api/auth/logout', { method: 'POST' });
      } catch (error) {
        console.error('Logout API error (could be session already cleared):', error);
      } finally {
        this.clearAuth(); // Always clear client-side state on logout attempt
        navigateTo('/login');
      }
    },


    async initializeAuth() {
      try {
        const response = await $fetch('/api/auth/me'); // A new API endpoint we'll create
        if (response.user) {
          this.setAuth(response.token, response.user);
        } else {
          this.clearAuth();
        }
        } catch (error) {
          console.error('Authentication initialization failed:', error);
          this.clearAuth(); // Ensure state is clear if validation fails
        }
      }
  },
  });