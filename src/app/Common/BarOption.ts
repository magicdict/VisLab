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
        series: [{
            data: [],
            type: 'bar'
        }]
    };

    public static CreateBar(category: string[], value: number[]) {
        let o = CommonFunction.clone(this.IBarStardard);
        o.xAxis.data = category;
        o.series[0].data = value;
        return o;
    }

}