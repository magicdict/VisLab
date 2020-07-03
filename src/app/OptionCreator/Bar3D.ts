import { Chart3D, Series, Axis } from './OptionBase';

export class Bar3D extends Chart3D {
    public static CreateBar3DItem(data: any[][]) {
        let s = new Series();
        s.type = "bar3D"
        s.data = data;
        return s;
    }
    
    public static CreateBar3D(xAxisData: string[], yAxisData: string[],
        xAxisName: string, yAxisName: string, zAxisName: string, data: number[][]) {
        let o = new Bar3D();
        o.xAxis3D = new Axis();
        o.yAxis3D = new Axis();
        o.zAxis3D = new Axis();
        
        o.xAxis3D.data = xAxisData;
        o.yAxis3D.data = yAxisData;

        o.xAxis3D.name = xAxisName;
        o.yAxis3D.name = yAxisName;
        o.zAxis3D.name = zAxisName;
        o.xAxis3D.type = "category"
        o.yAxis3D.type = "category"
        o.zAxis3D.type = "value"
        o.series.push(this.CreateBar3DItem(data))

        return o;
    }
}

