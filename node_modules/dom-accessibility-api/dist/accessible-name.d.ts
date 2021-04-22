/**
 * implements https://w3c.github.io/accname/
 */
/**
 * interface for an options-bag where `window.getComputedStyle` can be mocked
 */
interface GetComputedStyleOptions {
    getComputedStyle?: typeof window.getComputedStyle;
}
/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
 * @param root
 * @param [options]
 * @parma [options.getComputedStyle] - mock window.getComputedStyle. Needs `content`, `display` and `visibility`
 */
export declare function computeAccessibleName(root: Element, options?: GetComputedStyleOptions): string;
export {};
//# sourceMappingURL=accessible-name.d.ts.map