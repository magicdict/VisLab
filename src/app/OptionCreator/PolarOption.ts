
import { OptionBase, Series } from './OptionBase';

export class PolarOption extends OptionBase {
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


    static CreatePolarItem(data: number[]) {
        let s = new PolarSeries();
        s.type = "bar"
        s.data = data;
        s.coordinateSystem = 'polar';
        return s;
    }

    public static CreatePolar(data: { name: string, value: number }[], radius: string): PolarOption {
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
        let i = this.CreatePolarItem(data.map(x => x.value));
        o.series.push(i);
        return o;
    }
}

export class PolarSeries extends Series {
    public coordinateSystem: string;
}