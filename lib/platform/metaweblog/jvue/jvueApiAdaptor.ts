import {MetaWeblogApiAdaptor} from "~/lib/platform/metaweblog/metaweblogApiAdaptor";
import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {MetaWeblogApi} from "~/lib/platform/metaweblog/metaweblogApi";
import {IApi} from "~/lib/api";

/**
 * JVue的API适配器
 */
export class JvueApiAdaptor extends MetaWeblogApiAdaptor implements IApi {
    private readonly env:any

    constructor(env:any) {
        super();

        this.env = env
        this.apiUrl = env.JVUE_API_URL || ""
        this.username = env.JVUE_USERNAME || ""
        this.password = env.JVUE_PASSWORD || ""
        this.appkey = API_TYPE_CONSTANTS.API_TYPE_JVUE

        this.metaWeblog = new MetaWeblogApi(this.appkey, this.apiUrl, this.username, this.password);
    }
}