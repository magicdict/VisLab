import { Axis, Series, OptionBase } from '../OptionBase';

export class ScatterUtility  {

    public static CreateScatterItem(value: any[][]) {
        let item = new Series();
        item.type = 'scatter';
        item.data = value;
        return item;
    }
    public static CreateEffectScatterItem(value: any[][]) {
        let item = new Series();
        item.type = 'effectScatter';
        item.data = value;
        return item;
    }
    public static CreateScatter(value: number[][]) {
        let o = new OptionBase();
        o.tooltip = { trigger: 'axis' };
        o.xAxis = [new Axis()];
        o.yAxis = [new Axis()];
        o.series.push(this.CreateScatterItem(value));
        return o;
    }
}


