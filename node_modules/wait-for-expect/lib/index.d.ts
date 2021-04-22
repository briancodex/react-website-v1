/**
 * Waits for the expectation to pass and returns a Promise
 *
 * @param  expectation  Function  Expectation that has to complete without throwing
 * @param  timeout  Number  Maximum wait interval, 4500ms by default
 * @param  interval  Number  Wait-between-retries interval, 50ms by default
 * @return  Promise  Promise to return a callback result
 */
declare const waitForExpect: {
    (expectation: () => void | Promise<void>, timeout?: number, interval?: number): Promise<{}>;
    defaults: {
        timeout: number;
        interval: number;
    };
};
export default waitForExpect;
