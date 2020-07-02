import { OptionBase, Axis, Series } from './OptionBase';

export class BarOption extends OptionBase {

    public static CreateBarItem(value: number[]) {
        let item = new Series();
        item.type = 'bar';
        item.data = value;
        return item;
    }

    public static CreateBar(category: string[], value: number[]): BarOption {
        let o = new BarOption();
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.xAxis.data = category;
        o.series.push(this.CreateBarItem(value));
        return o;
    }
}