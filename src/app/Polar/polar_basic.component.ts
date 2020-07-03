import { OnInit, Component } from '@angular/core';
import { PolarOption } from '../OptionCreator/PolarOption';
import { ChartColor } from '../OptionCreator/ChartColor'
import { CommonFunction } from '../common';
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
    Sample = PolarOption.CreatePolar(CommonFunction.clone(this.dataset), "75%");

    ngOnInit(): void {
        this.Sample.series[0].itemStyle.color = this.getColor;
        this.Sample.series[0].itemStyle.opacity = 0.5;
        this.Sample.series[0].emphasis.itemStyle.opacity = 1;
    }

    getColor(params) {
        //定义一个颜色集合
        var colorList = ChartColor.colorlist_7_Baidu;
        //对每个bar显示一种颜色
        return colorList[params.dataIndex]
    }
}