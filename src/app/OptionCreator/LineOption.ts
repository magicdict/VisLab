import { OptionBase, Axis, Series, AreaStyle, Chart2D } from './OptionBase';

export class LineOption extends Chart2D {

    public static CreateLineItem(value: number[]) {
        let item = new Series();
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

    public static series_SetAreaStyle(option: any, style: AreaStyle) {
        option['areaStyle'] = style;
    }
}