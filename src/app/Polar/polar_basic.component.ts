import { OnInit, Component } from '@angular/core';
import { PolarOption } from '../OptionCreator/Polar';
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
    Sample_Bar = PolarOption.CreatePolarForBar(CommonFunction.clone(this.dataset), "75%");
    Sample_Scatter: PolarOption;
    ngOnInit(): void {
        this.Sample_Bar.series[0].itemStyle.color = this.getColor;
        this.Sample_Bar.series[0].itemStyle.opacity = 0.5;
        this.Sample_Bar.series[0].emphasis.itemStyle.opacity = 1;
        let angle = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let radius = ['攻击', '防御', "生命", "魂力", "速度"];
        let ds = [];
        for (let angleidx = 0; angleidx < angle.length; angleidx++) {
            for (let radiusidx = 0; radiusidx < radius.length; radiusidx++) {
                ds.push([radiusidx, angleidx, Math.round(Math.random() * 30)])
            }
        }
        this.Sample_Scatter = PolarOption.CreatePolarForScatter(angle, radius, ds, "85%");
        this.Sample_Scatter.series[0].itemStyle.color = this.getColor2;
        this.Sample_Scatter.series[0].symbolSize = (val) => { return val[2] };
        this.Sample_Scatter.tooltip = {
            formatter: function (params) {
                return angle[(<echarts.EChartOption.Tooltip.Format>params).value[1]] + " " + 
                       radius[(<echarts.EChartOption.Tooltip.Format>params).value[0]]  + ":" + 
                       (<echarts.EChartOption.Tooltip.Format>params).value[2];
            }
        }
    }

    getColor(params) {
        //定义一个颜色集合
        var colorList = ChartColor.colorlist_7_Baidu;
        //对每个bar显示一种颜色
        return colorList[params.dataIndex]
    }

    getColor2(params) {
        //定义一个颜色集合
        var colorList = ChartColor.colorlist_7_Baidu;
        //对每个bar显示一种颜色
        return colorList[params.value[1]]
    }
}