import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";

export default defineEventHandler(async (event) => {
    const env = useRuntimeConfig()
    console.log('Runtime env:', env)

    const query = useQuery(event)

    if (query.t instanceof Array) {
        throw new Error("参数类型错误")
    }

    const defaultType = env.DEFAULT_TYPE || API_TYPE_CONSTANTS.API_TYPE_WORDPRESS
    const type = query.t || defaultType

    if (query.postid instanceof Array) {
        throw new Error("参数类型错误")
    }
    const postid = query.postid || "1"

    const api = new API(type, env)

    const result = await api.getPost(postid)

    return {
        code: 0,
        msg: "操作成功",
        data: result
    }
})