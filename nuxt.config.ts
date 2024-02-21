// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
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
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ru',
        name: 'Русский',
      },
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'kz',
        name: 'Казакша',
      },
    ],
    vueI18n: './i18n.config.ts',
    differentDomains: false,
  },
})
