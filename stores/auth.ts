import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: false
    }),
    getters: {
        isAuth: (state) => state.auth
    },
    actions: {
        setAuth(val: boolean) {
            this.auth = val
        }
    }
})