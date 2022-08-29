import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {API} from "~/lib/api";
import logUtil from "~/lib/logUtil";

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    if (query.t instanceof Array) {
        throw new Error("参数类型错误")
    }
    logUtil.logInfo("query.t", query.t)

    const type = query.t || API_TYPE_CONSTANTS.API_TYPE_JVUE
    const num = 10
    const page = 1
    const keyword = ""

    const env = useRuntimeConfig()
    logUtil.logInfo('Runtime env:', env)

    const api = new API(type, env)

    const result = await api.getRecentPosts(num, page, keyword)

    return {
        code: 0,
        msg: "操作成功",
        data: result
    }
})