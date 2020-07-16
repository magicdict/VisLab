import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarOption } from '../OptionCreator/Bar';
import { LineOption } from '../OptionCreator/Line';
import { Axis, OptionBase, Series } from '../OptionCreator/OptionBase';
import { ChartComponent } from '../Chart/chart.component';
import { CalendarOption } from '../OptionCreator/Calendar';
import { OptionHelper } from '../OptionCreator/OptionHelper';
import { ChartColor } from '../OptionCreator/ChartColor';
import { TimelineOption, TimeLine } from '../OptionCreator/Timeline';
import { registerMap } from 'echarts';

@Component({
    templateUrl: './covid19.component.html'
})
export class Covid19_Component implements OnInit {
    title = '新冠肺炎2019';
    chartComp = ChartComponent;
    constructor(private http: HttpClient) {

    }
    Line_Total: BarOption;
    Calendar_Total: CalendarOption;
    BarTimeLine: TimelineOption;
    ChinaMap: OptionBase = new OptionBase(); //InitChart必须要new对象
    ngOnInit(): void {
        let Country_Dairy = this.http.get<{ PublishDate: string, Confirmed_Total: number, Recoved_Total: number, Death_Total: number }[]>("assets/json/Country_Dairy.json").toPromise();
        Country_Dairy.then(
            r => {
                r = r.filter(x => x.Confirmed_Total !== 0); //除去收尾的0数据
                this.Line_Total = LineOption.CreateLine(r.map(x => x.PublishDate.substring(0, 10)), r.map(x => x.Confirmed_Total))
                this.Line_Total.series.push(LineOption.CreateLineItem(r.map(x => x.Recoved_Total)))
                this.Line_Total.series.push(LineOption.CreateLineItem(r.map(x => x.Death_Total)));
                //双坐标轴
                let yAxis1 = new Axis();
                let yAxis2 = new Axis();
                this.Line_Total.yAxis = [yAxis1, yAxis2]
                this.Line_Total.series[0].itemStyle.color = "red";
                this.Line_Total.series[0].name = "累积确诊人数";
                this.Line_Total.series[0].yAxisIndex = 0;

                this.Line_Total.series[1].itemStyle.color = "green";
                this.Line_Total.series[1].name = "累积治疗人数";
                this.Line_Total.series[1].yAxisIndex = 0;

                this.Line_Total.series[2].itemStyle.color = "black";
                this.Line_Total.series[2].name = "累积死亡人数";
                this.Line_Total.series[2].yAxisIndex = 1;

                let date = r.map(x => x.PublishDate.substring(0, 10));
                let value = r.map(x => x.Recoved_Total);
                this.Calendar_Total = CalendarOption.CreateCalendar(date, value, "heatmap");
                this.Calendar_Total.calendar.range = ["2020-2", "2020-4"];
                this.Calendar_Total.calendar.monthLabel.show = true;
                this.Calendar_Total.calendar.cellSize = [70, 50];
                this.Calendar_Total.series[0].label.formatter = (x) => { return x.value[0] + "\n" + x.value[1] };
                OptionHelper.chart_SetVisualMap_Min(this.Calendar_Total, 80000, 10000, ChartColor.colorlist_VisualMapinRange);

            }
        )

        let Province_Dairy = this.http.get<{ PublishDate: string, Confirmed_Total: number, Province: string }[]>("assets/json/Province_Dairy.json").toPromise();
        Province_Dairy.then(
            r => {
                let basebar = new OptionBase();
                let timeline = new TimeLine();
                let options = [];
                for (let index = 15; index < 32; index++) {
                    let Day: string = (index < 10) ? "0" + index.toString() : index.toString();
                    timeline.data.push("2020-03-" + Day);
                    var ds = r.filter(x => x.PublishDate.substring(0, 10) === "2020-03-" + Day);
                    ds = ds.sort((x, y) => { return y.Confirmed_Total - x.Confirmed_Total }).slice(1, 10);
                    let t = BarOption.CreateBar(ds.map(x => x.Province), ds.map(x => x.Confirmed_Total));
                    options.push(t);
                }
                timeline.label = { formatter: (s: any) => { return ((new Date(s)).getMonth() + 1) + "-" + (new Date(s)).getDate(); } };
                this.BarTimeLine = TimelineOption.CreateTimeLine(basebar, timeline);
                this.BarTimeLine.options = options;
                var ds = r.filter(x => x.PublishDate.substring(0, 10) === "2020-03-15");
                this.ChinaMap.series[0].data = ds.map((x) => { return { name: x.Province, value: x.Confirmed_Total } });
                OptionHelper.chart_SetVisualMap(this.ChinaMap,2000,ChartColor.colorlist_VisualMapinRange_More);
                if (this.ChinaMapChart !== undefined) this.ChinaMapChart.setOption(this.ChinaMap);
            }
        )

        this.http.get('assets/map/data-china.json')
            .subscribe(geoJson => {
                registerMap('China', geoJson);
                //console.log("registerMap")
                if (this.ChinaMapChart !== undefined) {
                    this.ChinaMapChart.setOption(this.ChinaMap);
                }
            });

    }

    ChinaMapChart: any;
    GetMapChart(chart: any) {
        //如果ChinaMap本身有问题，InitChart方法无法执行！！！
        //console.log("GetMapChart");
        this.ChinaMapChart = chart;
        let china = new Series();
        china.type = "map";
        china['mapType'] = "China";
        this.ChinaMap.series.push(china);
        this.ChinaMapChart.setOption(this.ChinaMap);
    }
}