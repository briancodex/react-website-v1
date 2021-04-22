"use strict";
// https://w3c.github.io/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html
Object.defineProperty(exports, "__esModule", { value: true });
function getRole(element) {
    const explicitRole = getExplicitRole(element);
    if (explicitRole !== null) {
        return explicitRole;
    }
    return getImplicitRole(element);
}
exports.default = getRole;
const tagToRoleMappings = {
    ARTICLE: "article",
    ASIDE: "complementary",
    BODY: "document",
    BUTTON: "button",
    DATALIST: "listbox",
    DD: "definition",
    DETAILS: "group",
    DIALOG: "dialog",
    DT: "term",
    FIELDSET: "group",
    FIGURE: "figure",
    // WARNING: Only with an accessible name
    FORM: "form",
    FOOTER: "contentinfo",
    H1: "heading",
    H2: "heading",
    H3: "heading",
    H4: "heading",
    H5: "heading",
    H6: "heading",
    HEADER: "banner",
    HR: "separator",
    LEGEND: "legend",
    LI: "listitem",
    MATH: "math",
    MAIN: "main",
    MENU: "list",
    NAV: "navigation",
    OL: "list",
    OPTGROUP: "group",
    // WARNING: Only in certain context
    OPTION: "option",
    OUTPUT: "status",
    PROGRESS: "progressbar",
    // WARNING: Only with an accessible name
    SECTION: "region",
    SUMMARY: "button",
    TABLE: "table",
    TBODY: "rowgroup",
    TEXTAREA: "textbox",
    TFOOT: "rowgroup",
    // WARNING: Only in certain context
    TD: "cell",
    TH: "columnheader",
    THEAD: "rowgroup",
    TR: "row",
    UL: "list"
};
function getImplicitRole(element) {
    const mappedByTag = tagToRoleMappings[element.tagName];
    if (mappedByTag !== undefined) {
        return mappedByTag;
    }
    switch (element.tagName) {
        case "A":
        case "AREA":
        case "LINK":
            if (element.hasAttribute("href")) {
                return "link";
            }
            break;
        case "IMG":
            if ((element.getAttribute("alt") || "").length > 0) {
                return "img";
            }
            break;
        case "INPUT": {
            const { type } = element;
            switch (type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                    return "button";
                case "checkbox":
                case "radio":
                    return type;
                case "range":
                    return "slider";
                case "email":
                case "tel":
                case "text":
                case "url":
                    if (element.hasAttribute("list")) {
                        return "combobox";
                    }
                    return "textbox";
                case "search":
                    if (element.hasAttribute("list")) {
                        return "combobox";
                    }
                    return "searchbox";
                default:
                    return null;
            }
        }
        case "SELECT":
            if (element.hasAttribute("multiple") ||
                element.size > 1) {
                return "listbox";
            }
            return "combobox";
    }
    return null;
}
function getExplicitRole(element) {
    if (element.hasAttribute("role")) {
        // safe due to hasAttribute check
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const [explicitRole] = element
            .getAttribute("role")
            .trim()
            .split(" ");
        if (explicitRole !== undefined && explicitRole.length > 0) {
            return explicitRole;
        }
    }
    return null;
}
//# sourceMappingURL=getRole.js.map