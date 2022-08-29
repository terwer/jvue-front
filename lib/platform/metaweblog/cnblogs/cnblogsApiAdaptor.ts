import {MetaWeblogApiAdaptor} from "~/lib/platform/metaweblog/metaweblogApiAdaptor";
import {IApi} from "~/lib/api";
import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {MetaWeblogApi} from "~/lib/platform/metaweblog/metaweblogApi";

/**
 * 博客园的API适配器
 */
export class CnblogsApiAdaptor extends MetaWeblogApiAdaptor implements IApi {
    private readonly env:any

    constructor(env:any) {
        super();

        this.env = env
        this.apiUrl = process.env.CNBLOGS_API_URL || ""
        this.username = process.env.CNBLOGS_USERNAME || ""
        this.password = process.env.CNBLOGS_PASSWORD || ""
        this.appkey = API_TYPE_CONSTANTS.API_TYPE_CNBLOGS

        this.metaWeblog = new MetaWeblogApi(this.appkey, this.apiUrl, this.username, this.password);
    }
}