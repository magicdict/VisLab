import { CommonFunction } from './common';
import { ChartBase } from './ChartBase';

export class PolarOption {
    static PolarItem = {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '',
    }
    public static CreatePolar(data: { name: string, value: number }[], radius: string) {
        let o = new ChartBase();
        o.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        };
        o['radiusAxis'] = {};   //即使是空的也必须写！！！
        o['angleAxis'] = {
            type: 'category',
            data: data.map(x => x.name),
            z: 10,
            interval: 50
        };
        o['polar'] = {
            radius: radius
        };
        let i = CommonFunction.clone(this.PolarItem);
        i.data = data.map(x => x.value);
        o.series.push(i);
        return o;
    }

}