export class CommonFunction {
    /**克隆 */
    public static clone<T>(source: T): T {
        return (JSON.parse(JSON.stringify(source)));
    }

    public static getRandomArray(limit: number, times: number) {
        let x = [];
        for (let index = 0; index < times; index++) {
            x.push(Math.round(Math.random() * limit));
        }
        return x;
    }
}