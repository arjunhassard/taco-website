// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-swiper',
    'nuxt-marquee'
  ],
  
  nitro: {
    prerender: {
      routes: ['/'] // Add routes that need pre-rendering
    }
  }
})
