import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  head: {
    titleTemplate: '%s - A Restaurant Management Solution by b2bServiceNet',
    title: 'Dining',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/diningLogo.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/localStorage.js' },
    { src: '~/plugins/user.server.js' },
    { src: '~/plugins/notifier.js' },
    { src: '~/plugins/dialog.js' },
    { src: '~/plugins/vuejs-google-maps.js', mode: 'all' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/eslint-module',
    '@nuxtjs/apollo'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.SERVER_BASE_URL
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#07152b'

        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  env: {
    SERVICE_HUB_ENDPOINT: process.env.SERVER_BASE_URL,
    SERVICE_CATEGORY_ID: process.env.SERVICE_CATEGORY_ID,
    DINING_ADMIN_PANEL_URL: process.env.DINING_ADMIN_PANEL_URL,
    DINING_WEB_URL: process.env.DINING_WEB_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    ICON_IMAGE_BASE_URL: process.env.ICON_IMAGE_BASE_URL,
    THUMBNAIL_IMAGE_BASE_URL: process.env.THUMBNAIL_IMAGE_BASE_URL
  },
  server: {
    // host: '192.168.0.100',
    // host: '192.168.0.197',
    port: 5010
  }
}
