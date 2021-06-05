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
    'nuxt-build-optimisations',
  ],

  googleFonts: {
    preconnect: true,
    download: true,
    families: {
      Montserrat: { wght: [600, 700, 800, 900] },
      Poppins: { wght: [300, 400] },
      FiraMono: { wght: [300, 400] },
      RobotoSlab: { wght: [400, 500] },
      Robot: { wght: [500] },
      RobotMono: { wght: [500] },
    },
  },

  fontawesome: {
    component: 'fa',
    addCss: 'false',
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
        'faUserCircle',
        'faSignInAlt',
        'faUserPlus',
        'faAddressCard',
        'faUsers',
        'faLightbulb',
        'faSearch',
        'faTag',
        'faHashtag',
        'faShoppingBag',
        'faEuroSign',
        'faCartPlus',
        'faCopyright',
      ],
      brands: [
        'faFacebook',
        'faTwitter',
        'faInstagram',
        'faPinterest',
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
