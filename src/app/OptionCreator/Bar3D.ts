import { Chart3D, Series } from './OptionBase';

export class Bar3D extends Chart3D {
    public static CreateBar3DItem(data: any[][]) {
        let s = new Series();
        s.type = "scatter3D"
        s.data = data;
        return s;
    }
    
    public static CreateBar3D(xAxisData: string[], yAxisData: string[], zAxisData: string[],
        xAxisName: string, yAxisName: string, zAxisName: string, data: number[][]) {
        let o = new Bar3D();
        o.xAxis3D.data = xAxisData;
        o.yAxis3D.data = yAxisData;
        o.zAxis3D.data = zAxisData;

        o.xAxis3D.name = xAxisName;
        o.yAxis3D.name = yAxisName;
        o.zAxis3D.name = zAxisName;

        o.series.push(this.CreateBar3DItem(data))
    }
}

