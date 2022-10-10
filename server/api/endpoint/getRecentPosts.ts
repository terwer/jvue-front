import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";
import logUtil from "~/lib/logUtil";

export default defineEventHandler(async (event) => {
    const env = useRuntimeConfig()
    logUtil.logInfo('Runtime env:', env)

    const query = useQuery(event)
    if (query.t instanceof Array) {
        throw new Error("参数类型错误")
    }
    logUtil.logInfo("query.t", query.t)

    if (query.pg instanceof Array) {
        throw new Error("参数类型错误")
    }

    const defaultType = env.DEFAULT_TYPE || API_TYPE_CONSTANTS.API_TYPE_WORDPRESS
    const type = query.t || defaultType
    const num = 10
    const page = query.pg || "1"

    if (query.k instanceof Array) {
        throw new Error("参数类型错误")
    }

    const keyword = query.k || ""

    const api = new API(type, env)

    // logUtil.logInfo("keyword=>", keyword)
    const result = await api.getRecentPosts(num, parseInt(page) - 1, keyword)

    return {
        code: 0,
        msg: "操作成功",
        data: result
    }
})