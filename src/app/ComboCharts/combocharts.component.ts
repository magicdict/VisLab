import { OnInit, Component } from '@angular/core';
import { Radar } from '../EChartsUtility/Series/Radar';
import { ChartComponent } from '../Chart/chart.component';
import { ChartColor } from '../EChartsUtility/ChartColor';
import { PieUtility } from '../EChartsUtility/Series/Pie';
import { CommonFunction } from '../common';
import { LineUtility } from '../EChartsUtility/Series/Line';
import { Axis, OptionBase } from '../EChartsUtility/OptionBase';
import { AxisType } from '../EChartsUtility/Enum';

@Component({
    templateUrl: './combocharts.component.html'
})
export class ComboChartsComponent implements OnInit {
    title = '组合图-基本';
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
    Sample: OptionBase;
    Sample_Pie_Bar: OptionBase;
    ngOnInit(): void {
        this.Sample = Radar.RadarUtility.CreateRadar(this.indicators, this.dataset);
        let dataset_multi = [];
        this.dataset.map(x => x.value).forEach(
            arr => {
                dataset_multi.push(arr);
            }
        )

        let dataset = [
            { value: 50, name: '唐三' },
            { value: 100, name: '戴沐白' },
            { value: 150, name: '马红俊' },
            { value: 70, name: '奥斯卡' },
            { value: 80, name: '小舞' },
            { value: 120, name: '宁荣荣' },
            { value: 90, name: '朱竹清' },
        ];

        //主从图表
        let x = PieUtility.CreatePieItem(dataset, '20%')
        x['center'] = ['85%', '15%'];
        this.Sample.series.push(x);
        this.Sample.series[0]['color'] = ChartColor.colorlist_7_Baidu;
        this.Sample.series[1]['color'] = ChartColor.colorlist_7_Baidu;


        this.Sample_Pie_Bar = PieUtility.CreatePie(CommonFunction.clone(dataset), "65%");
        this.Sample_Pie_Bar.series[0].label.show = true;
        this.Sample_Pie_Bar.series[0]['color'] = ChartColor.colorlist_7_Baidu;

        let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let value = [50, 100, 150, 70, 80, 120, 90];
        let line = LineUtility.CreateLineItem(value);
        //line用坐标轴的修正
        var line_xAsix = new Axis();
        line_xAsix.type = AxisType.category;
        line_xAsix.data = category;
        
        var line_yAsix = new Axis();
        line_yAsix.type = AxisType.value;
        this.Sample_Pie_Bar.xAxis = [line_xAsix];
        this.Sample_Pie_Bar.yAxis = [line_yAsix];
        this.Sample_Pie_Bar.grid = [{
            'top': '0%', 'left': '10%', 'width': '50%', 'height': '100'
        }]
        line_xAsix.gridIndex = 0;    
        line_yAsix.gridIndex = 0;    
        line.xAxisIndex = 0;
        line.yAxisIndex = 0;
        //console.log(this.Sample_Pie_Bar);
        //图（Chart）和坐标（Axis）绑定，坐标和网格（Grid）绑定
        this.Sample_Pie_Bar.series.push(line);
    }
}