import { OnInit, Component } from '@angular/core';
import { ChartComponent } from '../Chart/chart.component';
import { OptionBase, Series } from '../EChartsUtility/OptionBase';
import { registerMap, ECharts, EChartOption } from 'echarts';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './map_basic.component.html',
})
export class Map_BasicComponent implements OnInit {
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
        this.http.get('assets/map/data-china.json')
            .subscribe(geoJson => {
                registerMap('China', geoJson);
                if (this.ChinaMap !== undefined) this.ChinaMap.setOption(<EChartOption>this.Sample);
            });
        this.http.get('assets/map/data-zhejiang.json')
            .subscribe(geoJson => {
                registerMap('zhejiang', geoJson);
                if (this.ZJMap !== undefined) this.ZJMap.setOption(<EChartOption>this.Sample_ZJ);
            });
    }

    title = '地图-基本';
    Sample: OptionBase = new OptionBase();
    Sample_ZJ: OptionBase = new OptionBase();
    chartComp = ChartComponent;
    ChinaMap: ECharts;
    GetMapChart(chart: ECharts) {
        //console.log("GetMapChart");
        this.ChinaMap = chart;
        let china = new Series();
        china.type = "map";
        china['mapType'] = "China";
        this.Sample.series.push(china);
        this.ChinaMap.setOption(<EChartOption>this.Sample);
    }

    ZJMap: ECharts;
    GetZJMapChart(chart: ECharts) {
        this.ZJMap = chart;
        let ZJ = new Series();
        ZJ.type = "map";
        ZJ['mapType'] = "zhejiang";
        this.Sample_ZJ.series.push(ZJ);
        this.ZJMap.setOption(<EChartOption>this.Sample_ZJ);
    }
}