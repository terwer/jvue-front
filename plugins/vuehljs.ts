import vueHljs from "~/plugins/hljs/vue-hljs/main.js";

/**
 * 代码高亮插件
 */
export default defineNuxtPlugin((nuxtApp) => {
    // vueHljs
    nuxtApp.vueApp.use(vueHljs)
});