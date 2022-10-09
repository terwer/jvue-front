import {defineStore} from "pinia";

/**
 * 设置配置存储
 */
export const useSettingStore = defineStore("layout", () => {
    const layout = ref("default")
    const lang = ref("zh_CN")

    /**
     * 设置新的布局
     * @param ly 布局
     */
    function setLayout(ly: string) {
        layout.value = ly;
    }

    /**
     * 设置新语言
     * @param l 语言
     */
    function setLang(l: string) {
        lang.value = l
    }

    return {layout, setLayout, lang, setLang}
})