
import { Chart2D, Series, coordinateSystem_polar } from './OptionBase';

export class PolarOption extends Chart2D {
    public angleAxis = {};
    public radiusAxis = {};
    public polar = {
        radius: "55%"
    }

    static CreatePolarBarItem(data: number[]) {
        let s = new Series();
        s.type = "bar"
        s.data = data;
        s.coordinateSystem = coordinateSystem_polar;
        return s;
    }

    public static CreatePolarForBar(data: { name: string, value: number }[], radius: string): PolarOption {
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
        };
        o.polar.radius = radius;
        let i = this.CreatePolarBarItem(data.map(x => x.value));
        o.series.push(i);
        return o;
    }

    static CreatePolarScatterItem(data: number[][]) {
        let s = new Series();
        s.type = "scatter"
        s.data = data;
        s.coordinateSystem = 'polar';
        return s;
    }

    public static CreatePolarForScatter(angleAxis: string[], radiusAxis: string[], data: number[][], radius: string): PolarOption {
        let o = new PolarOption();
        o.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        };
        o.radiusAxis = {
            type: 'category',
            data: radiusAxis,
            z: 10,
            axisLabel: {
                interval: 0
            }
        };
        o.angleAxis = {
            type: 'category',
            data: angleAxis,
            z: 10,
            axisLabel: {
                interval: 0
            }
        };
        o.polar.radius = radius;
        o.series.push(this.CreatePolarScatterItem(data))
        return o;
    }

}