import { OnInit, Component } from '@angular/core';
import { PolarOption } from '../OptionCreator/PolarOption';
import { ChartColor } from '../OptionCreator/ChartColor'
import { OptionHelper } from '../OptionCreator/OptionHelper';
@Component({
    templateUrl: './polar_basic.component.html'
})
export class Polar_BasicComponent implements OnInit {
    title = '极坐标-基本';
    dataset = [
        { value: 50, name: '唐三' },
        { value: 100, name: '戴沐白' },
        { value: 150, name: '马红俊' },
        { value: 70, name: '奥斯卡' },
        { value: 80, name: '小舞' },
        { value: 120, name: '宁荣荣' },
        { value: 90, name: '朱竹清' },
    ];
    Sample = PolarOption.CreatePolar(OptionHelper.clone(this.dataset), "55%");

    ngOnInit(): void {
        OptionHelper.series_SetBarItemStyle(this.Sample.series[0], ChartColor.colorlist_7_Baidu);
    }
}