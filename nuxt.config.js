export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kaikou-another',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/common.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/scroll.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|mp4|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },

  serverMiddleware: [
    '~/api'
  ],

  env: {
    dbUrl: 'postgres://engwjysraxvuhk:83ee81933cbdf4c8a7b01a3bc3e9f6d75975ee0ba7dcf51d62f94d3e1359c150@ec2-18-210-64-223.compute-1.amazonaws.com:5432/d6vgau5fedo2g5'
  }
}
