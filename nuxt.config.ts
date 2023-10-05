// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  imports: {
    dirs: ['stores'],
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/supabase', 'nuxt-icon', '@cssninja/nuxt-toaster', [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore',  'definePiniaStore'],
    },
  ]],
  supabase: {
    redirect : false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  

})
