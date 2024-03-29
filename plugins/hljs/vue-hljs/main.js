import Hljs from "highlight.js";
import {CopyButtonPlugin} from "../codecopy";
import "../codecopy/codecopy.css";
import "./vs.css";
import {renderHTML} from "~/lib/markdownUtil";
import {unescapeHTML} from "~/lib/strUtil";
import logUtil from "~/lib/logUtil";
import {prettyHtml} from "~/lib/htmlUtil";

const vueHljs = {};

vueHljs.install = Vue => {
    // 代码复制
    Hljs.addPlugin(
        new CopyButtonPlugin()
    );

    Vue.directive("highlight", el => {
        let html = renderHTML(el.innerHTML)
        html = prettyHtml(html)
        // console.log(html)
        el.innerHTML = html;

        const blocks = el.querySelectorAll("pre code");
        Array.prototype.forEach.call(blocks, Hljs.highlightBlock);

        // 取消转义
        Array.prototype.forEach.call(blocks, function (bel) {
            const bclass = bel.getAttribute("class");
            console.log(bclass)
            let newHtml = bel.innerHTML
            // console.log(newHtml)

            newHtml = unescapeHTML(newHtml)
            bel.innerHTML = newHtml
            // console.log(newHtml)
        })

        // 代码选项卡
        // 代码块
        const codeGroups = el.querySelectorAll("code-group");
        // 处理每个代码块
        codeGroups.forEach(group => {
            // 防止重复添加
            if (group.getElementsByTagName("ul").length === 0) {
                const newNode = document.createElement("ul");
                newNode.setAttribute("class", "code-tab");

                const codeBlocks = group.querySelectorAll("code-block");
                codeBlocks.forEach(block => {
                    const title = block.attributes.getNamedItem("title")?.value;
                    const active = block.attributes.getNamedItem("active")?.value;
                    const isActive = active !== undefined;
                    // console.log(block.attributes.length)
                    // console.log(title)
                    // console.log(isActive)

                    const item = document.createElement("li");
                    item.setAttribute(
                        "class",
                        isActive ? "code-tab-item current" : "code-tab-item"
                    );
                    item.innerHTML = title || "";
                    item.addEventListener("click", function (event) {
                        const targetElement = event.target;
                        // 选择状态
                        // console.log(codeBlocks[0].innerHTML)
                        const allLis = targetElement.parentElement.querySelectorAll("li");
                        allLis.forEach(li => {
                            li.setAttribute("class", "code-tab-item");
                        });
                        targetElement.setAttribute("class", "code-tab-item current");

                        // 设置tab
                        codeBlocks.forEach(cb => {
                            if (
                                cb.attributes.getNamedItem("title")?.value ===
                                targetElement.innerHTML
                            ) {
                                cb.setAttribute("active", "");
                            } else {
                                cb.removeAttribute("active");
                            }
                        });
                        // console.log(targetElement.innerHTML);
                    });

                    newNode.append(item);
                });

                const firstBlock = codeBlocks[0];
                firstBlock?.parentNode?.insertBefore(newNode, firstBlock);
                // console.log("tab")
            }
        });
    });
};

export default vueHljs;
