import { OnInit, Component } from '@angular/core';
import { Scatter3D } from '../Common/3DChart';
@Component({
    templateUrl: './scatter3d_basic.component.html'
})
export class Scatter3D_BasicComponent implements OnInit {
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
    Sample = Scatter3D.CreateScatter3D(this.dataset.map(x => [x.act, x.def, x.hp, x.name]));

    ngOnInit(): void {
        this.Sample.series[0].symbolSize = 10;
        this.Sample.series[0].emphasis.label.formatter = this.LabelForPoint;
    }
    LabelForPoint(params: any) {
        return params.data[3] + "\n攻击：" + params.data[0] + "" + "\n防御:" + params.data[1] + "\n生命：" + params.data[2];
    };
}