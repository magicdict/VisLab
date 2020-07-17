
import { OptionBase, Series, coordinateSystem_polar } from '../OptionBase';

export class PolarOption extends OptionBase {
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
        o.radiusAxis = new RadiusAxis();    //即使不用也不可为null

        o.angleAxis = new AngleAxis();
        o.angleAxis.type = "category"
        o.angleAxis.data = data.map(x => x.name);
        o.angleAxis.z = 10;

        o.polar = new PolarConfig();
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
        o.radiusAxis = new RadiusAxis();
        o.radiusAxis.type = "category"
        o.radiusAxis.data = radiusAxis;
        o.radiusAxis.z = 10;
        o.radiusAxis.axisLabel = { interval: 0 };

        o.angleAxis = new AngleAxis();
        o.angleAxis.type = "category"
        o.angleAxis.data = angleAxis;
        o.angleAxis.z = 10;
        o.angleAxis.axisLabel = { interval: 0 };

        o.polar = new PolarConfig();
        o.polar.radius = radius;
        o.series.push(this.CreatePolarScatterItem(data))
        return o;
    }

}

export class PolarConfig {
    public radius?: string | number;
}

export class RadiusAxis {
    public type?: string;
    public data?: string[];
    public z?: number;
    public axisLabel?: any;
}

export class AngleAxis {
    public type?: string;
    public data?: string[];
    public z?: number;
    public axisLabel?: any;
}