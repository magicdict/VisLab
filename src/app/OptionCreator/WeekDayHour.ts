import { PolarOption } from './Polar'
/**
 * 周次时间模板
 */
export class WeekDayHour {
    /**
     * 极坐标散点图
     * @param data 数据
     */
    public static CreatePolarScatterChart(weeknames: string[], hournames: string[], data: number[][], radius: string) {
        return PolarOption.CreatePolarForScatter(hournames, weeknames, data, radius);
    }
}