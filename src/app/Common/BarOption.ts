import { CommonFunction } from './common';

export class BarOption {
    private static IBarStardard = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };
    static BarItem = {
        data: [],
        type: 'bar'
    }
    public static CreateBarItem(value: number[]){
        let item = CommonFunction.clone(this.BarItem);
        item.data = value;
        return item;
    }
    public static CreateBar(category: string[], value: number[]) {
        let o = CommonFunction.clone(this.IBarStardard);
        o.xAxis.data = category;
        o.series.push(this.CreateBarItem(value));
        return o;
    }

}