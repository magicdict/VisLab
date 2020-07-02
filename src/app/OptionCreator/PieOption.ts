
import { ChartColor } from './ChartColor';
import { ChartBase } from './ChartBase';
import { OptionHelper } from './OptionHelper';

export class PieOption extends ChartBase {

    private static IPieItem = {
        name: '',
        type: 'pie',
        radius: null,
        center: ['50%', '50%'],
        data: [],
        itemStyle: {
            emphasis: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }

    public static CreatePie(data: { name: string, value: number }[], radius: string | number[]) {
        let o = new PieOption();
        o.series.push(OptionHelper.clone(this.IPieItem));
        o.series[0].data = data;
        o.series[0].radius = radius;
        return o;
    }

    /**南丁格尔图 */
    public static CreateNightingale(data: { name: string, value: number }[], radius: string): any {
        let o = new PieOption();
        o.series.push(OptionHelper.clone(this.IPieItem));
        o.series[0].data = data.sort((x, y) => { return y.value - x.value });    //为了美观，数据排序
        o.series[0].radius = radius;
        o.series[0]['roseType'] = "area";
        o.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        return o;
    }
}