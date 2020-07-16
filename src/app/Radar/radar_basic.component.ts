import { OnInit, Component } from '@angular/core';
import { Radar } from '../OptionCreator/Radar';
import { ChartComponent } from '../Chart/chart.component';
import { ChartColor } from '../OptionCreator/ChartColor';
import { CommonFunction } from '../common';
import { EChartOption } from 'echarts';

@Component({
    templateUrl: './radar_basic.component.html'
})
export class Radar_BasicComponent implements OnInit {
    title = '雷达图-基本';
    dataset = [
        { value: CommonFunction.getRandomArray(100, 5), name: '唐三' },
        { value: CommonFunction.getRandomArray(100, 5), name: '戴沐白' },
        { value: CommonFunction.getRandomArray(100, 5), name: '马红俊' },
        { value: CommonFunction.getRandomArray(100, 5), name: '奥斯卡' },
        { value: CommonFunction.getRandomArray(100, 5), name: '小舞' },
        { value: CommonFunction.getRandomArray(100, 5), name: '宁荣荣' },
        { value: CommonFunction.getRandomArray(100, 5), name: '朱竹清' },
    ];
    indicators = [{ name: "攻击", max: 100 }, { name: "防御", max: 100 }, { name: "生命", max: 100 }, { name: "魂力", max: 100 }, { name: "速度", max: 100 }];
    chartComp = ChartComponent
    Sample: Radar.RadarOption;
    Sample_NoLegend: Radar.RadarOption;
    Sample_Offical: EChartOption = {};

    ngOnInit(): void {
        
        this.Sample = Radar.RadarOption.CreateRadar(this.indicators, this.dataset);
        this.Sample.series[0].color = ChartColor.colorlist_7_Baidu;
        //以下代码等价以上代码
        let rc = new Radar.RadarConfig();
        rc.indicator = this.indicators;
        this.Sample_Offical.radar = rc;
        this.Sample_Offical.legend = { data: this.dataset.map(x => x.name) }
        let rs: EChartOption.SeriesRadar = {};
        rs.data = this.dataset;
        rs.type = "radar";
        Object.assign(rs, { color: ChartColor.colorlist_7_Baidu });
        this.Sample_Offical.series = [];
        this.Sample_Offical.series.push(rs);

        let c = Radar.RadarOption.CreateRadar_NoLegend(this.indicators, this.dataset.map(x => x.value));
        c.radar.splitLine = {
            lineStyle: {
                color: ChartColor.colorlist_7_Baidu
            }
        };
        let rs0: EChartOption.SeriesRadar = c.series[0];
        rs0.itemStyle = { color: '#B3E4A1' };
        rs0.areaStyle = { opacity: 0.05 };
        rs0.lineStyle = {
            width: 1,
            opacity: 0.5
        };
        this.Sample_NoLegend = c;


    }
}