import { Axis,  Chart3D, Series } from '../OptionBase';

export class Scatter3D extends Chart3D {
    public static CreateScatter3DItem(data: any[][]){
        let s = new Series();
        s.type = "scatter3D"
        s.data = data;
        return s;
    }

    /**
     * 新建3维散点图
     * @param axisname 轴标题
     * @param data 数据
     */
    public static CreateScatter3D(axisname: string[], data: any[][]) {
        let o = new Scatter3D();
        o.xAxis3D = new Axis();
        o.yAxis3D = new Axis();
        o.zAxis3D = new Axis();
        o.xAxis3D.name = axisname[0];
        o.yAxis3D.name = axisname[1];
        o.zAxis3D.name = axisname[2];
        o.series.push(this.CreateScatter3DItem(data));
        return o;
    }
}