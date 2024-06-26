
export default defineNuxtRouteMiddleware((to, from) => { 
  if (typeof window !== 'undefined' && window.localStorage) {    
    if (!localStorage.getItem('auth-token')) {
      return navigateTo('/auth')
    } 
  }
})