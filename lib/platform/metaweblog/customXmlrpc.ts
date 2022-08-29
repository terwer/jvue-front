import logUtil from "~/lib/logUtil";
// @ts-ignore
import * as Serializer from 'xmlrpc/lib/serializer'
import { parse } from 'arraybuffer-xml-parser';

/**
 * 自定义xmlrpc的请求与解析，解决apache xmlrpc的扩展问题
 * @param apiUrl
 * @param reqMethod
 * @param reqParams
 */
export async function fetchCustom(apiUrl: string, reqMethod: string, reqParams: Array<string>) {
    try {
        const methodBodyXml = Serializer.serializeMethodCall(reqMethod, reqParams, "utf8")

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "content-type": "text/xml"
            },
            body: methodBodyXml
        })
        const resXml = await response.text()
        logUtil.logInfo("resXml=>", resXml)

        const parseResult: any = parse(resXml)
        logUtil.logInfo("parseResult=>", parseResult)

        const resJson = parseResult.methodResponse || {}
        logUtil.logInfo("resJson=>", JSON.stringify(resJson))

        return resJson
    } catch (e: any) {
        throw new Error(e)
    }
}