import { OnInit, Component } from '@angular/core';
import { BaiduMapUtility } from '../EChartsUtility/Series/BaiduMap';
import { ChartComponent } from '../Chart/chart.component';
import { ScatterUtility } from '../EChartsUtility/Series/Scatter';
import { CommonFunction } from '../common';
import { OptionHelper } from '../EChartsUtility/OptionHelper';
import { ChartColor } from '../EChartsUtility/ChartColor';
import { Series, coordinateSystem_bmap, OptionBase } from '../EChartsUtility/OptionBase';
import { HttpClient } from '@angular/common/http';
import { LinesDataItem, LinesSeries } from '../EChartsUtility/Series/Lines';


@Component({
    templateUrl: './bmap_basic.component.html',
})
export class BMap_BasicComponent implements OnInit {
    constructor(private http: HttpClient) {

    }

    title = '百度地图-基本';
    Sample: OptionBase;
    Sample_Lines: OptionBase;
    Sample_Colorful: OptionBase;
    Sample_Heat: OptionBase;
    chartComp = ChartComponent;
    ngOnInit(): void {
        this.Sample = BaiduMapUtility.CreateMapOption();
        let s = ScatterUtility.CreateScatterItem([[110.3373, 20.0303, 'A', 10], [110.3473, 20.0403, 'B', 20]])
        s.type = 'effectScatter';
        s['rippleEffect'] = {
            brushType: 'stroke'
        };
        s.symbolSize = 20;
        s.coordinateSystem = coordinateSystem_bmap;
        s.label.formatter = this.getLabel;
        this.Sample.series.push(s);

        this.Sample_Colorful = CommonFunction.clone(this.Sample);
        this.Sample_Colorful.bmap.mapStyle.styleJson = [];
        this.Sample_Colorful.series[0].label.formatter = this.getLabel;

        let priceMap = this.http.get<{ lat: number, lng: number, value: number }[]>("assets/json/MapHeat.json").toPromise();
        this.Sample_Heat = BaiduMapUtility.CreateMapOption();
        OptionHelper.chart_SetVisualMap(this.Sample_Heat, 300, ChartColor.colorlist_VisualMapinRange_More);
        let heatdata = new Series();
        heatdata.type = 'heatmap';
        heatdata.coordinateSystem = coordinateSystem_bmap;
        this.Sample_Heat.series.push(heatdata);

        this.Sample_Lines = BaiduMapUtility.CreateMapOption();
        let s2 = new LinesSeries();
        s2.type = "lines";
        s2.coordinateSystem = coordinateSystem_bmap;
        let lineA = new LinesDataItem([110.3373, 20.0303], [110.3473, 20.0403]);
        lineA.lineStyle = { width: 10, color: "yellow" };
        let lineB = new LinesDataItem([110.3473, 20.0403], [110.3573, 20.0503]);
        lineB.lineStyle = { width: 10, color: "green" };
        s2.data = [lineA, lineB];
        s2.effect.symbol = 'image://assets/image/唐三/头像.png';
        s2.effect.symbolSize = 50;
        s2.effect.color = 'red';
        this.Sample_Lines.series.push(s2);

        priceMap.then(
            r => {
                this.Sample_Heat.series[0].data = r.map(x => { return [x.lng, x.lat, x.value] })
                this.Sample_Heat.bmap.center = [r[0].lng, r[0].lat];
                this.Sample_Heat.bmap.zoom = 13;
                this.HeatMapChart.setOption(this.Sample_Heat);
            }
        )

    }
    getLabel(params) {
        return params.value[2];
    }
    HeatMapChart: any;
    GetMapChart(chart: any) {
        this.HeatMapChart = chart;
    }
}