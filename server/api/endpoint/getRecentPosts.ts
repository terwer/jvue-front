import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";

export default defineEventHandler(async (event) => {
    const type = API_TYPE_CONSTANTS.API_TYPE_SIYUAN
    const num = 10
    const page = 1
    const keyword = ""

    const env = useRuntimeConfig()
    console.log('Runtime env:', env)

    const api = new API(type, env)

    const result = await api.getRecentPosts(num, page, keyword)

    return {
        code: 0,
        msg: "操作成功",
        data: result
    }
})