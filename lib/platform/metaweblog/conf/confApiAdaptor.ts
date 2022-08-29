import {IApi} from "~/lib/api";
import {MetaWeblogApiAdaptor} from "~/lib/platform/metaweblog/metaweblogApiAdaptor";
import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {MetaWeblogApi} from "~/lib/platform/metaweblog/metaweblogApi";

/**
 * Confluence的API适配器
 */
export class ConfApiAdaptor extends MetaWeblogApiAdaptor implements IApi {
    private readonly env: any

    constructor(env: any) {
        super();

        this.env = env
        this.apiUrl = env.CONF_API_URL || ""
        this.username = env.CONF_USERNAME || ""
        this.password = env.CONF_PASSWORD || ""
        this.appkey = API_TYPE_CONSTANTS.API_TYPE_CONF

        this.metaWeblog = new MetaWeblogApi(this.appkey, this.apiUrl, this.username, this.password);
    }
}