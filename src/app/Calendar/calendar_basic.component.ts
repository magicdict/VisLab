import { OnInit, Component } from '@angular/core';
import { Calendar } from '../EChartsUtility/Calendar';
import { ChartComponent } from '../Chart/chart.component';
import { OptionHelper } from '../EChartsUtility/OptionHelper';
import { ChartColor } from '../EChartsUtility/ChartColor';
import { OptionBase } from '../EChartsUtility/OptionBase';

@Component({
    templateUrl: './calendar_basic.component.html'
})
export class Calendar_BasicComponent implements OnInit {
    title = '日历图-基本';
    chartComp = ChartComponent
    Sample: OptionBase;
    ngOnInit(): void {
        let date = [];
        let value = [];
        for (let index = 1; index < 32; index++) {
            date.push("2020-1-" + index);
            value.push(Math.round(Math.random() * 100))
        }
        this.Sample = Calendar.CalendarUtility.CreateCalendar(date, value, "heatmap");
        this.Sample.calendar.range = "2020-1";
        this.Sample.series[0].label.formatter = (x: { value: string[]; }) => x.value[0] + ":" + x.value[1];
        OptionHelper.chart_SetVisualMap(this.Sample, 100, ChartColor.colorlist_VisualMapinRange);
    }
}