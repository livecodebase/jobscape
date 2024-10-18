// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      // meta: [
      //   // <meta name="viewport" content="width=device-width, initial-scale=1">
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // ],
      script: [
        { src: 'https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js', body: true },
        { src: '/assets/libs/popper.min.js', body: true },
        { src: '/assets/libs/simplebar.min.js', body: true },
        { src: '/assets/js/pages/switcher.js', body: true },
        { src: '/assets/libs/choices.min.js', body: true },
        { src: '/assets/js/pages/job-list.init.js', body: true },
        { src: '/assets/js/pages/dropdown&modal.init.js', body: true },
        { src: '/assets/libs/swiper-bundle.min.js', body: true },
        { src: '/assets/js/pages/swiper.init.js', body: true },
        { src: '/assets/js/pages/nav&tabs.js', body: true },
        { src: '/assets/js/app.js', body: true },
      ],
      link: [
        { rel: 'stylesheet', href: '/assets/css/icons.css' },
        { rel: 'stylesheet', href: '/assets/libs/choices.min.css' },
        { rel: 'stylesheet', href: '/assets/libs/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/assets/css/custom.css' },
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
