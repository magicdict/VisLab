import { Axis, Series, Chart2D } from './OptionBase';

export class ScatterOption extends Chart2D {

    public static CreateScatterItem(value: number[][]) {
        let item = new Series();
        item.type = 'scatter';
        item.data = value;
        return item;
    }
    public static CreateScatter(value: number[][]) {
        let o = new ScatterOption();
        o.tooltip = { trigger: 'axis' };
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.series.push(this.CreateScatterItem(value));
        return o;
    }
 }


