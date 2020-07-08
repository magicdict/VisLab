import { Chart2D, Axis, Series } from './OptionBase';

export class BarOption extends Chart2D {

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

    public static CreatePictorialBarItem(value: number[]) {
        let item = new Series();
        item.type = 'pictorialBar';
        item.symbol = 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z';
        item.data = value;
        return item;
    }

    public static CreatePictorialBar(category: string[], value: number[]): BarOption {
        let o = new BarOption();
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.xAxis.data = category;
        o.series.push(this.CreatePictorialBarItem(value));
        return o;
    }
}