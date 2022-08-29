import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";

export default defineEventHandler(async (event) => {
    const type = API_TYPE_CONSTANTS.API_TYPE_SIYUAN
    const postid = "20220822195304-l7nucpp"

    const env = useRuntimeConfig()
    console.log('Runtime env:', env)

    const api = new API(type, env)

    const result = await api.getPost(postid)

    return {
        code: 0,
        msg: "操作成功",
        data: result
    }
})