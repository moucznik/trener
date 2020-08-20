import colors from "vuetify/es5/util/colors";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "nuxt-seo",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content"
  ],
  seo: {
    // Module options
    name: "🧔 Motivuj-se",
    title:
      "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
    templateTitle:
      "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
    description:
      "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu.",
    image: "http://motivuj-se.cz/cover.png",
    url: "http://motivuj-se.cz/",
    language: 'Czech',
    "og.name": "🧔 Motivuj-se",
    "og.title": "🧔 Motivuj-se | Budeě bydlet v tvarohárně",
    "og.description":
      "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu.",
    "og.locale": "cs",
    "og.url": "http://motivuj-se.cz/",
    "og.image": "http://motivuj-se.cz/cover.png"
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
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
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
