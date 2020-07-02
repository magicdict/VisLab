import { CommonFunction } from './common';
import { ChartBase, Axis } from './ChartBase';

export class LineOption extends ChartBase {
    static LineItem = {
        name: '',
        type: 'line',
        data: []
    };
    public static CreateLineItem(value: number[]) {
        let item = CommonFunction.clone(this.LineItem);
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
}