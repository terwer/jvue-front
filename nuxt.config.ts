import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        preset: "vercel",
    },
    typescript: {
        strict: true
    },
    static: {
        prefix: false
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
    }
})
