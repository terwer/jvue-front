import {defineStore} from "pinia";

/**
 * 搜索关键字存储
 */
export const useSearchStore = defineStore("sk", () => {
    const sk = ref("")

    function setSk(s: string) {
        sk.value = s
    }

    return {sk, setSk}
})