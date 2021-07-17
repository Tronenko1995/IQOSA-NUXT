export default {
  env: {
    baseUrl: process.env.BASE_URL
  },
  ssr: true,
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iqosa-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/app-components' },
    { src: '~/plugins/swiper.js' },
    { src: '~/plugins/aboutSlider', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module'],



  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  //   clubPlugins: {
  //     splitText: true
  //   }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'ru', 'ua'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        ru: {
          welcome: 'Привет'
        },
        ua: {
          welcome: 'Добрий день'
        }
      }
    }
  },

  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.API_BASE_URL,
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three'
    ],
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
        ]
      })
    }
  },

  loading: false,

  server: {
    port: 3008
  }
}
