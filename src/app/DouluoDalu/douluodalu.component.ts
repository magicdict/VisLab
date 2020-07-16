import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from '../Chart/chart.component';
import { OptionBase, Axis, Series, Position } from '../OptionCreator/OptionBase';
import { OptionHelper } from '../OptionCreator/OptionHelper';
import { BarOption } from '../OptionCreator/Bar';
import { PieOption } from '../OptionCreator/Pie';
import { ChartColor } from '../OptionCreator/ChartColor';
import { RadarConfig } from '../OptionCreator/Radar';

@Component({
    templateUrl: './douluodalu.component.html'
})
export class DouluoDalu_Component implements OnInit {
    title = '斗罗大陆';
    chartComp = ChartComponent;
    Sample: OptionBase = new OptionBase();
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
        let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let value = [50, 100, 150, 70, 80, 120, 90];
        let namevalue = [];
        for (let index = 0; index < category.length; index++) {
            namevalue.push({ name: category[index], value: value[index] });
        }

        let dataset = [
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '唐三' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '戴沐白' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '马红俊' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '奥斯卡' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '小舞' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '宁荣荣' },
            { value: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)], name: '朱竹清' },
        ];
        let indicators = [{ name: "攻击", max: 100 }, { name: "防御", max: 100 }, { name: "生命", max: 100 }, { name: "魂力", max: 100 }, { name: "速度", max: 100 }];


        let grid = []
        this.Sample.xAxis = [];
        this.Sample.yAxis = [];

        //没有坐标轴的，直接设定位置信息
        let PieSeries = PieOption.CreateNightingalePieItem(namevalue, "200");
        PieSeries.itemStyle.opacity = 0.7;
        PieSeries.top = 100;
        PieSeries.left = 50;
        PieSeries.width = 550;
        PieSeries.height = 550;
        this.Sample.series.push(PieSeries);

        //图（Chart）和坐标（Axis）绑定，坐标和网格（Grid）绑定
        let BarSeries = BarOption.CreateBarItem(value);
        let BarXAsix = new Axis();
        let BarYAsix = new Axis();
        BarXAsix.show = true;
        BarXAsix.axisLabel = { interval: 0, rotate: 45, color: "#FFFFFF" };
        BarXAsix.axisLine = { lineStyle: { color: "#FFFFFF" } };
        BarXAsix.gridIndex = 0;
        BarXAsix.data = category;

        BarYAsix.show = true;
        BarYAsix.axisLabel = { color: "#FFFFFF" };
        BarYAsix.axisLine = { lineStyle: { color: "#FFFFFF" } };

        this.Sample.xAxis.push(BarXAsix);
        this.Sample.yAxis.push(BarYAsix);
        BarSeries.xAxisIndex = 0;
        BarSeries.yAxisIndex = 0;

        BarSeries.itemStyle = {
            color: this.getColor,
            opacity: 0.7
        };
        BarSeries.emphasis.itemStyle = {
            opacity: 1
        };
        let bargrid = new Position();
        bargrid.top = 450;
        bargrid.left = 650;
        bargrid.width = 300;
        bargrid.height = 250;
        grid.push(bargrid)
        this.Sample.series.push(BarSeries);
        this.Sample.grid = grid;

        //雷达图:通过center和radius定位
        this.Sample.radar = new RadarConfig();
        this.Sample.radar.indicator = indicators;
        this.Sample.radar.center = [900, 200];
        this.Sample.radar.radius = 150;
        this.Sample.radar.splitLine = {
            lineStyle: {
                color: ChartColor.colorlist_7_Baidu
            }
        }
        let RadarSeries = new Series();
        RadarSeries.type = 'radar';
        RadarSeries.data = dataset;
        RadarSeries.itemStyle.color = this.getColor;
        RadarSeries['areaStyle'] = { opacity: 0.15 }
        RadarSeries['lineStyle'] = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };
        this.Sample.series.push(RadarSeries)


        //添加背景图（无图表内容的时候，不会绘制空的背景）
        OptionHelper.chart_SetBackGroundImage(this.Sample, '/assets/image/Background2.jpg', false);
        //增加图片
        let imggrid = new Position();
        imggrid.height = 128;
        imggrid.width = 280;
        imggrid.top = 650;
        imggrid.left = 20;
        let image = OptionHelper.chart_CreateGraphic_Image("assets/image/唐三/头像.png", imggrid, null)
        //右下角标识
        let text = OptionHelper.chart_CreateGraphic_Text("绝世唐门", 'white');
        let rect = OptionHelper.chart_CreateGraphic_rect(400, 50, "orange");
        let groupgrid = new Position();
        groupgrid.top = 100;
        groupgrid.right = 100;
        let group = OptionHelper.chart_CreateGraphic_group([rect, text], -Math.PI / 4,groupgrid);

        this.Sample.graphic = [image, group];
        //console.log(this.Sample);
    }


    getColor(params: any) {
        //定义一个颜色集合
        var colorList = ChartColor.colorlist_7_Baidu;
        //对每个bar显示一种颜色
        return colorList[params.dataIndex]
    }

}