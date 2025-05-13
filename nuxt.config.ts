export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "fr",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  compatibilityDate: "2025-01-05",
  nitro: {
    preset: "node-server",
  },
});
