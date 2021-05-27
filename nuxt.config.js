export default {
  // #  Global Page Headers: https://go.nuxtjs.dev/config-head
  ssr: false,

  // #  Loading Indicator: https://nuxtjs.org/docs/2.x/features/loading#the-loading-indicator-property
  loadingIndicator: {
    name: 'pulse',
    color: '#b78846',
    background: '#022e51',
  },

  // #  Progress Bar: https://nuxtjs.org/docs/2.x/features/loading
  loading: '@/components/LoadingBar.vue',

  head: {
    title: 'project_marcel_teugels',
    htmlAttrs: {
      lang: 'en',
      'data-theme': 'light',
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
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faGlobe',
          'faHome',
          'faBurn',
          'faQuestion',
          'faInfoCircle',
          'faHeart',
          'faInfoCircle',
          'faShoppingBasket',
          'faDraftingCompass',
          'faMapMarkerAlt',
          'faPhone',
          'faEnvelope',
          'faHouseDamage',
          'faStoreAlt',
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: [
          'faFacebookF',
          'faTwitter',
          'faInstagram',
          'faPinterestP',
          'faYoutube',
        ],
      },
    ],
  },
  stylelint: {
    // #  npx stylelint --fix assets/styles/scss/**/*.scss
    // #  npx stylelint --fix **/*.{vue,html,css,scss}
    configFile: './stylelint.config.js',
  },

  // #  Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //#  https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // #  Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // #  Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['./assets/styles/scss/style-recourses.scss'],
  },
};
