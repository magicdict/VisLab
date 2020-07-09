
import { ChartColor } from './ChartColor';
import { Chart2D, Series } from './OptionBase';

export class PieOption extends Chart2D {

    static CreatePieItem(data: { name: string, value: number }[], radius: string | number[]) {
        let s = new PieSeries();
        s.type = "pie"
        s.data = data;
        s.radius = radius;
        return s;
    }

    static CreateNightingalePieItem(data: { name: string, value: number }[], radius: string) {
        let s = new PieSeries();
        s.type = "pie"
        s.data = data.sort((x, y) => { return y.value - x.value });    //为了美观，数据排序
        s.radius = radius;
        s.roseType = "area";
        s['color'] = ChartColor.colorlist_7_Baidu;
        return s;
    }

    public static CreatePie(data: { name: string, value: number }[], radius: string | number[]) {
        let o = new PieOption();
        o.series.push(this.CreatePieItem(data, radius));
        return o;
    }

    /**南丁格尔图 */
    public static CreateNightingale(data: { name: string, value: number }[], radius: string): any {
        let o = new PieOption();
        o.series.push(this.CreateNightingalePieItem(data, radius));
        return o;
    }
}

export class PieSeries extends Series {
    public radius: string | number[];
    public roseType: string;
    //位置信息
    public height?: string | number;
    public width?: string | number;
    public top?: string | number;
    public bottom?: string | number;
    public left?: string | number;
    public right?: string | number;
}