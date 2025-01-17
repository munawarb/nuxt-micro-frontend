const StatsPlugin = require('stats-webpack-plugin')
const path = require('path')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    [
      '@nuxtjs/router',
      //
      { keepDefaultRouter: true, path: './router', fileName: 'index.js' },
    ],
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
       { handler: require(path.resolve(__dirname, '../../../')) }
  ],

  MFE: {
    force: true,
    output: {
        library: `nuxt-subapp-app`,
        libraryTarget: 'window',
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config) {

      config.plugins.push(new StatsPlugin('manifest.json', {
            chunkModules: false,
            entrypoints: true,
            source: false,
            chunks: false,
            modules: false,
            assets: false,
            children: false,
            exclude: [/node_modules/]
        }))
    }
  }
}
