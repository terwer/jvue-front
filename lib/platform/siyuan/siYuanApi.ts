import logUtil from "~/lib/logUtil";

/**
 * 思源API v2.0.27
 *
 * @author terwer
 * @date 2022-08-02 23:17
 *
 * https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md#%E9%89%B4%E6%9D%83
 */
export class SiYuanApi {
    private readonly env: any

    constructor(env: any) {
        this.env = env;
    }

    /**
     * 分页获取根文档
     * @param page 页码
     * @param keyword 关键字
     */
    public async getRootBlocksCount(keyword: string) {
        let stmt = `SELECT COUNT(DISTINCT b1.root_id) as count
        FROM blocks b1
        WHERE 1 = 1
        AND ((b1.content LIKE '%${keyword}%') OR (b1.tag LIKE '%${keyword}%')
    )`;
        let data = await this.sql(stmt)
        // logUtil.logError("getRootBlocksCount data=>", data[0].count)
        return data[0].count
    }

    /**
     * 分页获取根文档
     * @param page 页码
     * @param pagesize 数目
     *
     * select DISTINCT b2.root_id,b2.parent_id,b2.content from blocks b2
     *        WHERE 1==1
     * AND b2.id IN (
     *     SELECT DISTINCT b1.root_id
     *        FROM blocks b1
     *        WHERE 1 = 1
     *        AND ((b1.content LIKE '%github%') OR (b1.tag LIKE '%github%'))
     *        ORDER BY b1.updated DESC,b1.created DESC LIMIT 0,10
     * )
     * ORDER BY b2.updated DESC,b2.created DESC
     */
    public async getRootBlocks(page: number, pagesize: number, keyword: string) {
        let stmt = `select DISTINCT b2.root_id,b2.parent_id,b2.content from blocks b2 
        WHERE 1==1
        AND b2.id IN (
             SELECT DISTINCT b1.root_id
                FROM blocks b1
                WHERE 1 = 1
                AND ((b1.content LIKE '%${keyword}%') OR (b1.tag LIKE '%${keyword}%'))
                ORDER BY b1.updated DESC,b1.created DESC LIMIT ${page},${pagesize}
        )
        ORDER BY b2.updated DESC,b2.created DESC`
        let data = await this.sql(stmt)
        return data
    }

    /**
     * 获取块属性
     * @param blockId
     */
    public async getBlockAttrs(blockId: string) {
        let data = {
            id: blockId,
        }
        let url = '/api/attr/getBlockAttrs'
        return this.siyuanRequest(url, data)
    }

    /**
     * 设置块属性
     * @param blockId
     * @param attrs
     */
    public async setBlockAttrs(blockId: string, attrs: any) {
        let url = '/api/attr/setBlockAttrs'
        return this.siyuanRequest(url, {
            id: blockId,
            attrs: attrs,
        })
    }

    /**
     * 以id获取思源块信息
     * @param blockId 内容块ID
     */
    public async getBlockByID(blockId: string) {
        let stmt = `select *
                from blocks
                where id = '${blockId}'`
        let data = await this.sql(stmt)
        console.log(data)
        return data[0]
    }

    /**
     * 以slug获取思源块信息
     * @param slug 内容块别名
     */
    public async getBlockBySlug(slug: string) {
        let stmt = `select root_id from attributes 
               where name='custom-slug' and value='${slug}' 
               limit 1`
        let data = await this.sql(stmt)
        console.log(data)
        return data[0]
    }

    /**
     * 导出markdown文本
     * @param docId 文档id
     */
    public async exportMdContent(docId: string) {
        let data = {
            id: docId,
        }
        let url = '/api/export/exportMdContent'
        return this.siyuanRequest(url, data)
        //文档hepath与Markdown 内容
    }

    /**
     * 向思源请求数据
     * @param url url
     * @param data 数据
     * @param method 请求方法 GET | POST
     * @param useToken 权限TOKEN
     */
    private async siyuanRequest(url: string, data: any, method?: string, useToken?: boolean) {
        if (this.env.SIYUAN_API_URL != "") {
            url = this.env.SIYUAN_API_URL + url
        }

        let m = "POST"
        if (method) {
            m = method;
        }

        let fetchOps = {
            body: JSON.stringify(data),
            method: m
        }
        if (useToken != false) {
            Object.assign(fetchOps, {
                headers: {
                    "Authorization": `Token ${this.env.SIYUAN_AUTH_TOKEN}`,
                }
            })
        }

        logUtil.logInfo("向思源请求数据，url=>", url)
        logUtil.logInfo("向思源请求数据，fetchOps=>", fetchOps)
        const response = await fetch(url, fetchOps)
        const result: any = await response.json()
        logUtil.logInfo("向思源请求数据，result=>", result)
        return result.code === 0 ? result.data : null
    }

    /**
     * 以sql发送请求
     * @param sql sql
     */
    private async sql(sql: string) {
        let sqldata = {
            stmt: sql,
        }
        let url = '/api/query/sql'
        return this.siyuanRequest(url, sqldata)
    }
}