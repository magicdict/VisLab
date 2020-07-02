
import { OptionBase } from './OptionBase';


export class RadarOption extends OptionBase {
    public radar: any = {
        indicator: []
    }

    /**
     * 生成雷达图
     * @param indicators 雷达标识
     * @param data 数据
     */
    public static CreateRadar(indicators: { name: string, max: number }[], data: { name: string, value: number[] }[]) {
        let o = new RadarOption;
        o.radar.indicator = indicators;
        o.legend = {};
        o.legend.data = data.map(x => x.name);
        o.series.push({ data: data, type: "radar" });
        return o;
    }

    public static CreateRadar_Multi(indicators: { name: string, max: number }[], data: number[][]) {
        let o = new RadarOption;
        o.radar.indicator = indicators;
        o.series.push({ data: data, type: "radar" });
        return o;
    }
}