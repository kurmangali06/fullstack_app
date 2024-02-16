// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '@/styles/main.css',
  ],

  nitro: {
    plugins: ['~/server/database.ts']
  },
  runtimeConfig: {
    apiSecret: {
        MONGO_URL: process.env.MONGO_URL
    }
},
  pinia: {
    storesDirs: ['./stores/**',],
  },

})
