import Showdown from "showdown"

const converter = new Showdown.Converter({tables: true});

/**
 * 渲染Markdown
 * @param md
 */
export function renderHTML(md: string) {
    return converter.makeHtml(md);
}