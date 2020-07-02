
import { ChartBase } from './ChartBase';
import { OptionHelper } from './OptionHelper';

export class PolarOption extends ChartBase {
    public radiusAxis = {};
    public polar = {
        radius: "55%"
    }
    public angleAxis = {}
    static PolarItem = {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '',
    }
    public static CreatePolar(data: { name: string, value: number }[], radius: string):PolarOption {
        let o = new PolarOption();
        o.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        };
        o.angleAxis = {
            type: 'category',
            data: data.map(x => x.name),
            z: 10,
            interval: 50
        };
        o.polar.radius = radius;
        let i = OptionHelper.clone(this.PolarItem);
        i.data = data.map(x => x.value);
        o.series.push(i);
        return o;
    }
}