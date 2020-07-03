import { Axis, Series, AreaStyle, Chart2D } from './OptionBase';

export class LineOption extends Chart2D {

    public static CreateLineItem(value: number[]) {
        let item = new LineSeries();
        item.type = 'line';
        item.data = value;
        return item;
    }
    public static CreateLine(category: string[], value: number[]) {
        let o = new LineOption();
        o.tooltip = { trigger: 'axis' };
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.xAxis.data = category;
        o.series.push(this.CreateLineItem(value));
        return o;
    }
    /**
     * AreaStyle设定
     * @param series 
     * @param style 
     */
    public static series_SetAreaStyle(series: LineSeries, style: AreaStyle) {
        series['areaStyle'] = style;
    }


    public static series_SetMarkPoint(series: LineSeries, type: MarkPointType, name: string) {
        if (!series.markPoint) series.markPoint = { data: [] };
        series.markPoint.data.push({ type: MarkPointType[type], name: name });
    }
    public static series_SetMarkLine(series: LineSeries, type: MarkLineType, name: string) {
        if (!series.markLine) series.markLine = { data: [] };
        series.markLine.data.push({ type: MarkLineType[type], name: name });
    }

}

export class LineSeries extends Series {
    public markPoint?: { data: { type: string, name: string }[] };
    public markLine?: { data: { type: string, name: string }[] };
}

/**
 * markPoint枚举
 */
export enum MarkPointType {
    max, min, average
}

/**
 * markLine枚举
 */
export enum MarkLineType {
    max, min, average, median
}