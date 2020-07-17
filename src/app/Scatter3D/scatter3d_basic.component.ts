import { OnInit, Component } from '@angular/core';
import { Scatter3D } from '../OptionCreator/Series/Scatter3D';
import { ChartColor } from '../OptionCreator/ChartColor';
import { ChartComponent } from '../Chart/chart.component';
import { OptionHelper } from '../OptionCreator/OptionHelper';
@Component({
    templateUrl: './scatter3d_basic.component.html'
})
export class Scatter3D_BasicComponent implements OnInit {
    chartComp = ChartComponent;
    title = '散点图（3D）-基本';
    dataset = [
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '唐三' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '戴沐白' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '马红俊' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '奥斯卡' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '小舞' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '宁荣荣' },
        { act: Math.round(Math.random() * 100), def: Math.round(Math.random() * 100), hp: Math.round(Math.random() * 100), name: '朱竹清' },
    ];
    Sample = Scatter3D.CreateScatter3D(["攻击", "防御", "生命"], this.dataset.map(x => [x.act, x.def, x.hp, x.name, x.act + x.def + x.hp]));
    Sample_Color = Scatter3D.CreateScatter3D(["攻击", "防御", "生命"], this.dataset.map(x => [x.act, x.def, x.hp, x.name, x.act + x.def + x.hp]));

    ngOnInit(): void {
        this.Sample.series[0].symbolSize = 10;
        //emphasis.label设置的话，tooltip就不设置了
        this.Sample.tooltip = null;
        this.Sample.series[0].emphasis.label.formatter = this.LabelForPoint;
        this.Sample.series[0]['symbol'] = 'rect';
        OptionHelper.chart_SetVisualMap(this.Sample, 200, ChartColor.colorlist_VisualMapinRange);

        this.Sample_Color.series[0].symbolSize = 10;
        this.Sample_Color.tooltip = null;
        this.Sample_Color.series[0].emphasis.label.formatter = this.LabelForPoint;
        this.Sample_Color.series[0]['symbol'] = 'pin';
        //visualMap和color不兼容！
        this.Sample_Color.series[0]['itemStyle'] = { color: this.PointColor };


    }
    LabelForPoint(params: any) {
        return params.data[3] + "\n攻击：" + params.data[0] + "" + "\n防御:" + params.data[1] + "\n生命：" + params.data[2];
    };
    PointColor(params: any) {
        let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let color = ChartColor.colorlist_7_Baidu;
        for (let index = 0; index < category.length; index++) {
            const element = category[index];
            if (element === params.data[3]) return color[index];
        }
    };
}