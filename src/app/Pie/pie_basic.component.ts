import { OnInit, Component } from '@angular/core';
import { PieOption, } from '../OptionCreator/PieOption';

import { ChartColor } from '../OptionCreator/ChartColor'
import { OptionHelper } from '../OptionCreator/OptionHelper';
@Component({
    templateUrl: './pie_basic.component.html'
})
export class Pie_BasicComponent implements OnInit {
    title = '饼图-基本';
    Sample: any;
    Sample_Nightingale: any;
    Sample_Band: any;
    ngOnInit(): void {
        let dataset = [
            { value: 50, name: '唐三' },
            { value: 100, name: '戴沐白' },
            { value: 150, name: '马红俊' },
            { value: 70, name: '奥斯卡' },
            { value: 80, name: '小舞' },
            { value: 120, name: '宁荣荣' },
            { value: 90, name: '朱竹清' },
        ];

        this.Sample = PieOption.CreatePie(OptionHelper.clone(dataset), "55%");
        this.Sample.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        this.Sample_Nightingale = PieOption.CreateNightingale(OptionHelper.clone(dataset), "55%");
        this.Sample_Band = PieOption.CreatePie(OptionHelper.clone(dataset), [40, 90]);
        this.Sample_Band.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        this.Sample_Band.series[0].itemStyle['normal'] = {
            shadowBlur: 20,
            shadowColor: 'rgba(24,219,159,0.6)',
        };
    }
}