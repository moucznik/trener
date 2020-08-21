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
    titleTemplate:
      "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
    title:
      "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "image",
        name: "image",
        content: "http://motivuj-se.cz/cover.png"
      },
      {
        hid: "title",
        name: "title",
        content:
          "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu."
      },
      { hid: "og:name", name: "og:name", content: "🧔 Motivuj-se" },
      {
        hid: "og:title",
        name: "og:title",
        content: "🧔 Motivuj-se | Budeš bydlet v tvarohárně"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu."
      },
      {
        hid: "og:image",
        name: "og:image",
        property: "og:image",
        content: "http://motivuj-se.cz/cover.png"
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
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/google-analytics"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "nuxt-seo",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content"
  ],
  pwa: {
    meta: {
      "apple-mobile-web-app-capable": "true",
      ogSiteName: "Motivuj-se",
      ogTitle: "🧔 Motivuj-se ",
      ogImage: "http://motivuj-se.cz/cover.png"
    },
    manifest: {
      name: "Motivuj-se",
      author: "Motivuj-se",
      short_name: ".motiv",
      start_url: "/",
      display: "standalone",
      background_color: "#333333",
      theme_color: "#333333",
      orientation: "portrait-primary",
      lang: "cs-CZ",
      description:
        "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu.",
      appleMobileWebAppStatusBarStyle: "black-translucent"
    }
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
