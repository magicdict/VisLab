import { CommonFunction } from './common';

export class PolarOption {
    static IPolarStardard = {
        angleAxis: {
            type: 'category',
            data: [],   //整体数据要设定一下，不然数据将越过坐标范围
            z: 10,
            interval: 50
        },
        title: {
            text: ""
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        radiusAxis: {
        },
        polar: {
            radius: '70%'
        },
        series: [],
        legend: {
            //show: true,
            //top: 30,
            data: []
        }
    };

    static PolarItem = {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '',
    }

    public static CreatePolar(data: { name: string, value: number }[], radius: string) {
        let o = CommonFunction.clone(this.IPolarStardard);
        o.angleAxis.data = data.map(x => x.name);
        o.polar.radius = radius;
        let i = CommonFunction.clone(this.PolarItem);
        i.data = data.map(x => x.value);
        o.series.push(i);
        return o;
    }

}