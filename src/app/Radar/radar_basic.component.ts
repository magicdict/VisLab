import { OnInit, Component } from '@angular/core';
import { RadarOption } from '../OptionCreator/Radar';
import { ChartComponent } from '../Chart/chart.component';
import { ChartColor } from '../OptionCreator/ChartColor';

@Component({
    templateUrl: './radar_basic.component.html'
})
export class Radar_BasicComponent implements OnInit {
    title = '雷达图-基本';
    dataset = [
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '唐三' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '戴沐白' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '马红俊' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '奥斯卡' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '小舞' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '宁荣荣' },
        { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '朱竹清' },
    ];
    indicators = [{ name: "攻击", max: 100 }, { name: "防御", max: 100 }, { name: "生命", max: 100 }, { name: "魂力", max: 100 }, { name: "速度", max: 100 }];
    chartComp = ChartComponent
    Sample: RadarOption;
    Sample_Multi: RadarOption;
    ngOnInit(): void {
        this.Sample = RadarOption.CreateRadar(this.indicators, this.dataset);
        let dataset_multi = [];
        this.dataset.map(x => x.value).forEach(
            arr => {
                dataset_multi.push(arr);
            }
        )

        let c = RadarOption.CreateRadar_Multi(this.indicators, dataset_multi);
        c.radar['splitLine'] = {
            lineStyle: {
                color: ChartColor.colorlist_7_Baidu
            }
        };
        c.series[0]['itemStyle'] = { color: '#B3E4A1' }
        c.series[0]['areaStyle'] = { opacity: 0.05 }
        c.series[0]['lineStyle'] = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };
        this.Sample_Multi = c;
    }
}