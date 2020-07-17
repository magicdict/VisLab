import { OnInit, Component } from '@angular/core';
import { Bar3D } from '../OptionCreator/Series/Bar3D';
import { ChartComponent } from '../Chart/chart.component';
import { Chart3D } from '../OptionCreator/OptionBase';
import { OptionHelper } from '../OptionCreator/OptionHelper';
import { ChartColor } from '../OptionCreator/ChartColor';
@Component({
    templateUrl: './bar3d_basic.component.html'
})
export class Bar3D_BasicComponent implements OnInit {
    chartComp = ChartComponent;
    title = '柱状图（3D）-基本';
    categoryX = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    categoryY = ['攻击', '防御', "生命", "魂力", "速度"];
    Sample: Chart3D
    ngOnInit(): void {
        let dataset: number[][] = [];
        for (let roleind = 0; roleind < this.categoryX.length; roleind++) {
            for (let proidx = 0; proidx < this.categoryY.length; proidx++) {
                dataset.push([roleind, proidx, Math.round(Math.random() * 100)])
            }
        }
        this.Sample = Bar3D.CreateBar3D(this.categoryX, this.categoryY, "角色", "能力", "数值", dataset);
        this.Sample.series[0].emphasis.label.formatter = this.LabelForPoint;
        this.Sample.series[0].itemStyle.opacity = 0.5;
        this.Sample.tooltip = null;
        OptionHelper.chart_SetVisualMap(this.Sample, 100, ChartColor.colorlist_VisualMapinRange_More);
    }
    LabelForPoint(params: any) {
        let categoryX = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let categoryY = ['攻击', '防御', "生命", "魂力", "速度"];
        return "角色：" + categoryX[params.data[0]] + "" + "\n属性：" + categoryY[params.data[1]] + "\n数值：" + params.data[2];
    };
}