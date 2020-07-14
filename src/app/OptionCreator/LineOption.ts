import { Axis, Series, AreaStyle, OptionBase } from './OptionBase';
import { MarkPointType,MarkLineType} from './enum'
export class LineOption extends OptionBase {

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
        series.markPoint.data.push({ type: type, name: name });
    }

    public static series_SetMarkLine(series: LineSeries, type: MarkLineType, name: string) {
        if (!series.markLine) series.markLine = { data: [] };
        series.markLine.data.push({ type: type, name: name });
    }

    public static series_SetMarkArea(series: LineSeries, name: string,
        xAxistypeP0: MarkPointType, yAxistypeP0: MarkPointType,
        xAxistypeP1: MarkPointType, yAxistypeP1: MarkPointType,) {
        if (!series.markArea) series.markArea = { data: [] };
        series.markArea.data.push(
            [
                { xAxis: xAxistypeP0, yAxis: yAxistypeP0, name: name },
                { xAxis: xAxistypeP1, yAxis: yAxistypeP1, name: name }
            ]
        );
    }

}

export class LineSeries extends Series {
    public markPoint?: { data: { type: MarkPointType, name: string }[] };
    public markLine?: { data: { type: MarkLineType, name: string }[] };
    public markArea?: { data: { xAxis: MarkPointType, yAxis: MarkPointType, name: string }[][] };
    public step?: boolean | string = false;
    public smooth?: boolean = false;
}

