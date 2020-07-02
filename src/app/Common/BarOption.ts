import { CommonFunction } from './common';
import { ChartBase, Axis } from './ChartBase';
export interface Bar_itemStyle {
    /**
     * 阴影颜色。支持的格式同color。
     */
    color?: any;
    borderColor?: any;
    borderWidth?: any;
    borderType?: any;
    barBorderRadius?: any;
    shadowBlur?: any;
    shadowColor?: any;
    shadowOffsetX?: any;
    shadowOffsetY?: any;
    /**
     * 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
     */
    opacity?: any;
}
export class BarOption extends ChartBase {
    static BarItem = {
        data: [],
        type: 'bar'
    }

    public static CreateBarItem(value: number[]) {
        let item = CommonFunction.clone(this.BarItem);
        item.data = value;
        return item;
    }

    public static CreateBar(category: string[], value: number[]) {
        let o = new BarOption();
        o.xAxis = new Axis();
        o.yAxis = new Axis();
        o.xAxis.data = category;
        o.series.push(this.CreateBarItem(value));
        return o;
    }


    public static SetItemStyle(series: any, normal?: Bar_itemStyle, emphasis?: Bar_itemStyle) {
        if (normal) series['itemStyle'] = normal;
        if (emphasis) series['emphasis'] = { "itemStyle": emphasis };
    }
}