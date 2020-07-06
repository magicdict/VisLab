import { OnInit, Component } from '@angular/core';
import { ChartComponent } from '../Chart/chart.component';
import { Chart2D, Series } from '../OptionCreator/OptionBase';
import { registerMap } from 'echarts';
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
                if (this.ChinaMap !== undefined) this.ChinaMap.setOption(this.Sample);
            });
        this.http.get('assets/map/data-zhejiang.json')
            .subscribe(geoJson => {
                registerMap('zhejiang', geoJson);
                if (this.ZJMap !== undefined) this.ZJMap.setOption(this.Sample_ZJ);
            });
    }

    title = '地图-基本';
    Sample: Chart2D = new Chart2D();
    Sample_ZJ: Chart2D = new Chart2D();
    chartComp = ChartComponent;
    ChinaMap: any;
    GetMapChart(chart: any) {
        console.log("GetMapChart");
        this.ChinaMap = chart;
        let china = new Series();
        china.type = "map";
        china['mapType'] = "China";
        this.Sample.series.push(china);
        this.ChinaMap.setOption(this.Sample);
    }

    ZJMap: any;
    GetZJMapChart(chart: any) {
        this.ZJMap = chart;
        let ZJ = new Series();
        ZJ.type = "map";
        ZJ['mapType'] = "zhejiang";
        this.Sample_ZJ.series.push(ZJ);
        this.ZJMap.setOption(this.Sample_ZJ);
    }
}