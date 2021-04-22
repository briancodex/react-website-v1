"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isElement(node) {
    return (
    // @ts-ignore
    node !== null && node instanceof node.ownerDocument.defaultView.Element);
}
exports.isElement = isElement;
function isHTMLInputElement(node) {
    return (isElement(node) &&
        // @ts-ignore
        node instanceof node.ownerDocument.defaultView.HTMLInputElement);
}
exports.isHTMLInputElement = isHTMLInputElement;
function isHTMLSelectElement(node) {
    return (isElement(node) &&
        // @ts-ignore
        node instanceof node.ownerDocument.defaultView.HTMLSelectElement);
}
exports.isHTMLSelectElement = isHTMLSelectElement;
function isHTMLTextAreaElement(node) {
    return (isElement(node) &&
        // @ts-ignore
        node instanceof node.ownerDocument.defaultView.HTMLTextAreaElement);
}
exports.isHTMLTextAreaElement = isHTMLTextAreaElement;
function safeWindow(node) {
    const { defaultView } = node.ownerDocument === null ? node : node.ownerDocument;
    if (defaultView === null) {
        throw new TypeError("no window available");
    }
    return defaultView;
}
exports.safeWindow = safeWindow;
//# sourceMappingURL=util.js.map