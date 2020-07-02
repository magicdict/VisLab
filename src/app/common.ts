export class CommonFunction {
    /**克隆 */
    public static clone<T>(source: T): T {
        return (JSON.parse(JSON.stringify(source)));
    }
}