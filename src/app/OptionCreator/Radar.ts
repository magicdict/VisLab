import { OptionHelper } from './OptionHelper';


export class RadarOption {
    static IRadarStardard = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: []
        },
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: []
        },
        series: [{
            name: '',
            type: 'radar',
            data: []
        }]
    };

    /**
     * 生成雷达图
     * @param indicators 雷达标识
     * @param data 数据
     */
    public static CreateRadar(indicators: { name: string, max: number }[], data: { name: string, value: number[] }[]) {
        let o = OptionHelper.clone(this.IRadarStardard);
        o.radar.indicator = indicators;
        o.legend.data = data.map(x => x.name);
        o.series[0].data = data;
        return o;
    }

    public static CreateRadar_Multi(indicators: { name: string, max: number }[], data:number[][]) {
        let o = OptionHelper.clone(this.IRadarStardard);
        o.radar.indicator = indicators;
        o.series[0].data = data;
        return o;
    }
}