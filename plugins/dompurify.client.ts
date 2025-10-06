import DOMPurify from 'dompurify';

export default defineNuxtPlugin((nuxtApp) => {
  // Make DOMPurify's sanitize method available globally
  // through a helper function. You can use it in any
  // component with useNuxtApp().
  nuxtApp.provide('dompurify', DOMPurify.sanitize);
});