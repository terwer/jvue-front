import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";

export default defineEventHandler(async (event) => {
    const query = useQuery(event)

    if (query.t instanceof Array) {
        throw new Error("参数类型错误")
    }
    const type = query.t || API_TYPE_CONSTANTS.API_TYPE_WORDPRESS

    if (query.postid instanceof Array) {
        throw new Error("参数类型错误")
    }
    const postid = query.postid || "1"

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