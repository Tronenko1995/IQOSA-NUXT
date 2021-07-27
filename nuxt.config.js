export default {
  env: {
    baseUrl: process.env.BASE_URL
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
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
    { src: '~/plugins/directives', mode: 'client' },
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/moment',
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
