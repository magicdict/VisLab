
import { OptionBase, Series } from './OptionBase';
import { AreaStyle } from './Style';
import { EChartOption } from 'echarts';

export namespace Radar {

    export class RadarOption extends OptionBase {
        /**
         * 生成雷达图
         * @param indicators 雷达标识
         * @param data 数据
         */
        public static CreateRadar(indicators: { name: string, max: number }[], data: { name: string, value: number[] }[]) {
            let o = new RadarOption;
            o.radar = new RadarConfig();
            o.radar.indicator = indicators;
            o.legend = {};
            o.legend.data = data.map(x => x.name);
            o.series.push({ data: data, type: "radar" });
            return o;
        }
        public static CreateRadar_NoLegend(indicators: { name: string, max: number }[], data: number[][]) {
            let o = new RadarOption;
            o.radar = new RadarConfig();
            o.radar.indicator = indicators;
            o.series.push({ data: data, type: "radar" });
            return o;
        }
    }

    export class RadarConfig {
        public id?: string;
        public name?: string;
        public center?: number[];
        public radius?: number;
        public splitLine?: {
            show?: boolean,
            lineStyle?: EChartOption.LineStyle
        };
        public indicator?: { name: string, max: number, min?: number }[];
        public color?: string[]
    }
}
