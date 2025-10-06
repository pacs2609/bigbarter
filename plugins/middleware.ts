export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-middleware',
    (to, from) => {
      // console.log('This global middleware runs on every route change.')
    },
    { global: true }
  )
})