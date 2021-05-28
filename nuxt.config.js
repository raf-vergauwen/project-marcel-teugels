export default {
  // #  Global Page Headers: https://go.nuxtjs.dev/config-head
  ssr: false,

  // #  Loading Indicator: https://nuxtjs.org/docs/2.x/features/loading#the-loading-indicator-property
  loadingIndicator: {
    name: 'fading-circle',
    color: '#b78846',
    background: '#022e51',
  },

  // #  Progress Bar: https://nuxtjs.org/docs/2.x/features/loading
  loading: '~/components/LoadingBar.vue',

  head: {
    title: 'project_marcel_teugels',
    htmlAttrs: {
      lang: 'en',
      dataTheme: 'light--alt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // #  Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/scss/main.scss'],

  // #  Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // #  Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // #  Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // #  https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome', // Imports FontAwesome 5 SVG icons
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    preload: true,
    download: true,
    families: {
      Roboto: true,
      Montserrat: true,
      Oswald: true,
    },
  },

  fontawesome: {
    icons: {
      solid: [
        'faGlobe',
        'faHome',
        'faBurn',
        'faQuestion',
        'faInfoCircle',
        'faHeart',
        'faShoppingBasket',
        'faDraftingCompass',
        'faMapMarkerAlt',
        'faPhone',
        'faEnvelope',
        'faHouseDamage',
        'faStoreAlt',
      ],
      brands: [
        'faFacebookF',
        'faTwitter',
        'faInstagram',
        'faPinterestP',
        'faYoutube',
      ],
    },
  },

  stylelint: {
    // #  npx stylelint --fix assets/styles/scss/**/*.scss
    // #  npx stylelint --fix **/*.{vue,html,scss}
    configFile: './stylelint.config.js',
    fix: 'true',
  },

  // #  Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // #  https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // #  Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // #  Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },

  styleResources: {
    scss: ['./assets/styles/scss/style-recourses.scss'],
  },
};
