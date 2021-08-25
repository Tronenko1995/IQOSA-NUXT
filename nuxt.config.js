export default {
  env: {
    baseUrl: process.env.BASE_URL,
    frontUrl: process.env.FRONT_URL,
  },
  ssr: true,
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iqosa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'IQOSA' },
      { name: 'theme-color', content: '#1b1b1b' },
    ],
    link: [
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-192x192.png', sizes: '192x192' },
      { rel: 'manifest', href: '/favicon/manifest.json'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/i18n.js'
    },
    {
      src: '~/plugins/app-components'
    },
    {
      src: '~/plugins/swiper.js'
    },
    {
      src: '~/plugins/scrollLock.js'
    },
    {
      src: '~/plugins/directives',
      mode: 'client'
    },
    {
      src: '~/plugins/animation-directives',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/moment',
    '@nuxtjs/pwa',
  ],

  moment: {
    defaultLocale: 'ru',
    locales: ['ru', 'uk']
  },



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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
      onlyOnRoot: true,
    },
    locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
        },
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
        },
        {
          name: 'Ukrainian',
          code: 'ua',
          iso: 'uk-UA',
        }
      ],
      // lazy: true,
      // langDir: 'lang/',
      defaultLocale: 'en',
    vueI18n: {
      // fallbackLocale: 'ru',
      messages: {
        en: {
          share: 'Share',
          author: 'Author',
          subject: 'Subject',
          developed: 'Developed by',
          next: 'Next',
          FillTheForm: 'Fill the form',
          IncorrectCV: 'Incorrect CV',
          IncorrectVacancy: 'Incorrect Vacancy',
          IncorrectEmail: 'Incorrect Email',
          IncorrectLink: 'Incorrect Link',
          IncorrectName: 'Incorrect Name',
          IncorrectMessage: 'Incorrect Message',
          verticalMode: 'Сhange to vertical mode',
          plugText1: 'Follow us',
          plugText2: 'TO see it first',
        },
        ru: {
          share: 'Поделиться',
          author: 'Автор',
          subject: 'Тема',
          developed: 'Разработан',
          next: 'Следующий',
          FillTheForm: 'Заполните все поля',
          IncorrectCV: 'Некорректный файл',
          IncorrectVacancy: 'Некорректная вакансия',
          IncorrectEmail: 'Некорректный email',
          IncorrectLink: 'Некорректная ссылка',
          IncorrectName: 'Некорректное имя',
          IncorrectMessage: 'Некорректное сообщение',
          verticalMode: 'Перейти в вертикальный режим',
          plugText1: 'УЗНАЕШЬ ПЕРВЫМ,',
          plugText2: 'ЕСЛИ ПОДПИШЕШЬСЯ',
        },
        ua: {
          share: 'Поширити',
          author: 'Автор',
          subject: 'Тема',
          developed: 'Розроблений',
          next: 'Наступний',
          FillTheForm: 'FЗаповніть усі поля',
          IncorrectCV: 'Некорректний файл',
          IncorrectVacancy: 'Некорректна вакансія',
          IncorrectEmail: 'Некорректний Email',
          IncorrectLink: 'Некорректне посилання',
          IncorrectName: 'Некорректне ім\'я',
          IncorrectMessage: 'Некоректне повідомлення',
          verticalMode: 'Перейдіть у вертикальний режим',
          plugText1: 'ДІЗНАЄШСЯ ПЕРШИМ,',
          plugText2: 'ЯКЩО ПІДПИШЕШСЯ',
        }
      }
    },
    // vuex: {
      // moduleName: 'i18n',
      // mutations: {
        // setLocale: 'I18N_SET_LOCALE',
        // setMessages: false
      // },
      // preserveState: false
    // },
  },

  axios: {
    baseURL: process.env.API_BASE_URL,
    // debug: true,
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
