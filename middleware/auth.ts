
// ---cut---
export default defineNuxtRouteMiddleware((to, from) => { 
  const authStore = useAuthStore() 
  if (!authStore.isAuth) {
    return navigateTo('/auth')
  } 
})