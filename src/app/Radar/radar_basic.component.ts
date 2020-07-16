import { OnInit, Component } from '@angular/core';
import { Radar } from '../OptionCreator/Radar';
import { ChartComponent } from '../Chart/chart.component';
import { ChartColor } from '../OptionCreator/ChartColor';
import { CommonFunction } from '../common';

@Component({
    templateUrl: './radar_basic.component.html'
})
export class Radar_BasicComponent implements OnInit {
    title = '雷达图-基本';
    dataset = [
        { value: CommonFunction.getRandomArray(100, 7), name: '唐三' },
        { value: CommonFunction.getRandomArray(100, 7), name: '戴沐白' },
        { value: CommonFunction.getRandomArray(100, 7), name: '马红俊' },
        { value: CommonFunction.getRandomArray(100, 7), name: '奥斯卡' },
        { value: CommonFunction.getRandomArray(100, 7), name: '小舞' },
        { value: CommonFunction.getRandomArray(100, 7), name: '宁荣荣' },
        { value: CommonFunction.getRandomArray(100, 7), name: '朱竹清' },
    ];
    indicators = [{ name: "攻击", max: 100 }, { name: "防御", max: 100 }, { name: "生命", max: 100 }, { name: "魂力", max: 100 }, { name: "速度", max: 100 }];
    chartComp = ChartComponent
    Sample: Radar.RadarOption;
    Sample_Multi: Radar.RadarOption;
    ngOnInit(): void {
        this.Sample = Radar.RadarOption.CreateRadar(this.indicators, this.dataset);
        let dataset_multi = [];
        this.dataset.map(x => x.value).forEach(
            arr => {
                dataset_multi.push(arr);
            }
        )
        this.Sample.series[0].color = ChartColor.colorlist_7_Baidu;

        let c = Radar.RadarOption.CreateRadar_Multi(this.indicators, dataset_multi);
        c.radar.splitLine = {
            lineStyle: {
                color: ChartColor.colorlist_7_Baidu
            }
        };
        c.series[0].itemStyle = { color: '#B3E4A1' };
        (<Radar.RadarSeries>c.series[0]).areaStyle = { opacity: 0.05 };
        (<Radar.RadarSeries>c.series[0]).lineStyle = {
            width: 1,
            opacity: 0.5
        };
        this.Sample_Multi = c;
    }
}