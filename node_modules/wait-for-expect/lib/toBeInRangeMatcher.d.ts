declare namespace jest {
    interface Matchers<R> {
        toBeInRange(range: {
            min: number;
            max: number;
        }): R;
    }
}
declare function toBeInRange<T>(received: number, { min, max }: {
    min: number;
    max: number;
}): {
    message: () => string;
    pass: boolean;
};
