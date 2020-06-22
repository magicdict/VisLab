import { OnInit, Component } from '@angular/core';
import { IPieStardard } from '../Common/chartOption';
import { CommonFunction } from '../Common/common';

@Component({
    templateUrl: './pie_basic.component.html'
})
export class Pie_BasicComponent implements OnInit {
    title = '饼图-基本';
    Sample = CommonFunction.clone(IPieStardard);
    Sample_Nightingale = CommonFunction.clone(IPieStardard);
    Sample_Band = CommonFunction.clone(IPieStardard);
    ngOnInit(): void {
        this.Sample.series[0].data = [
            { value: 50, name: '唐三' },
            { value: 100, name: '戴沐白' },
            { value: 150, name: '马红俊' },
            { value: 70, name: '奥斯卡' },
            { value: 80, name: '小舞' },
            { value: 120, name: '宁荣荣' },
            { value: 90, name: '朱竹清' },
        ]
        this.Sample.series[0].radius = "55%";

        this.Sample_Nightingale = CommonFunction.clone(this.Sample);
        this.Sample_Nightingale.series[0].data.sort((x, y) => { return y.value - x.value });    //为了美观，数据排序
        this.Sample_Nightingale.series[0]['roseType'] = "area";
        this.Sample_Nightingale.series[0]['color'] = ["#60acfc", "#32d3eb", "#5bc49f", "#feb64d", "#ff7c7c", "#9287e7", "purple"];

        this.Sample_Band = CommonFunction.clone(this.Sample);
        this.Sample_Band.series[0]['color'] = ["#60acfc", "#32d3eb", "#5bc49f", "#feb64d", "#ff7c7c", "#9287e7", "purple"];
        this.Sample_Band.series[0].radius = [60, 90];
        this.Sample_Band.series[0].itemStyle['normal'] = {
            shadowBlur: 20,
            shadowColor: 'rgba(24,219,159,0.6)',
        };

    }
}