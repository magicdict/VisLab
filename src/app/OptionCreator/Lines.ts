import { Series } from './OptionBase';
import { EChartOption } from "echarts"
export class LinesSeries extends Series {
    public effect: any = {
        show: true,
        period: 6,
        trailLength: 0, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
        color: '#fff',
        symbol: 'triangle',
        symbolSize: 20
    }
}

export class LinesDataItem {
    public coords: number[][]
    public lineStyle?: EChartOption.LineStyle;
    constructor(startPoint: number[], endPoint: number[]) {
        this.coords = [startPoint, endPoint];
    }
}