import {defineNuxtConfig} from 'nuxt/config'
import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    src: "/lute.min.js",
                },
            ],
        },
    },


    // meta
    meta: {
        title: 'Element Plus + Nuxt 3',
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'ElementPlus + Nuxt3',
            },
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    nitro: {
        preset: "vercel",
    },

    // css
    css: [
        '~/assets/scss/index.scss',
        '~/assets/scss/index.dark.scss',
        'element-plus/theme-chalk/dark/css-vars.css'
    ],

    // build
    build: {
        transpile: [
            'element-plus/es',
        ]
    },

    typescript: {
        strict: true,
        shim: false,
    },

    static: {
        prefix: false
    },

    vite: {
        plugins: [ElementPlus()],
    },

    // build modules
    modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt'],

    // auto import components
    components: true,

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    unocss: {
        uno: true,
        attributify: true,
        icons: {
            scale: 1.2,
        },
    },

    publicRuntimeConfig: {
        SIYUAN_API_URL: process.env.SIYUAN_API_URL,
        SIYUAN_AUTH_TOKEN: process.env.SIYUAN_AUTH_TOKEN,
        CNBLOGS_API_URL: process.env.CNBLOGS_API_URL,
        CNBLOGS_USERNAME: process.env.CNBLOGS_USERNAME,
        CNBLOGS_PASSWORD: process.env.CNBLOGS_PASSWORD,
        JVUE_API_URL: process.env.JVUE_API_URL,
        JVUE_USERNAME: process.env.JVUE_USERNAME,
        JVUE_PASSWORD: process.env.JVUE_PASSWORD,
        CONF_API_URL: process.env.CONF_API_URL,
        CONF_USERNAME: process.env.CONF_USERNAME,
        CONF_PASSWORD: process.env.CONF_PASSWORD,
        WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
        WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME,
        WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD,
        DEFAULT_TYPE: process.env.DEFAULT_TYPE
    }
})
