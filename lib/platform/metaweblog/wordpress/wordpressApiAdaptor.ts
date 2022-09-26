import {API_TYPE_CONSTANTS} from "~/lib/constants";
import {MetaWeblogApi} from "~/lib/platform/metaweblog/metaweblogApi";
import {MetaWeblogApiAdaptor} from "~/lib/platform/metaweblog/metaweblogApiAdaptor";
import {IApi} from "~/lib/api";

export class WordpressApiAdaptor extends MetaWeblogApiAdaptor implements IApi {
    private readonly env:any

    constructor(env:any) {
        super();

        this.env = env
        this.apiUrl = process.env.WORDPRESS_API_URL || ""
        this.username = process.env.WORDPRESS_USERNAME || ""
        this.password = process.env.WORDPRESS_PASSWORD || ""
        this.appkey = API_TYPE_CONSTANTS.API_TYPE_WORDPRESS

        this.metaWeblog = new MetaWeblogApi(this.appkey, this.apiUrl, this.username, this.password);
    }
}