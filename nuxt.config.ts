// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
        '@nuxt/image-edge'
    ],
    build: {
        transpile: ['mdi-vue']
    },
    css: [
        '/assets/style.css'
    ]
})