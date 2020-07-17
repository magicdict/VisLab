import { OnInit, Component } from '@angular/core';
import { ChartColor } from '../EChartsUtility/ChartColor';
import { ChartComponent } from '../Chart/chart.component';
import { TimelineUtility, TimeLineConfig } from '../EChartsUtility/Timeline';
import { Bar } from '../EChartsUtility/Series/Bar';
import { OptionBase } from '../EChartsUtility/OptionBase';
import { CommonFunction } from '../common';

@Component({
    templateUrl: './timeline_basic.component.html'
})
export class TimeLineComponent implements OnInit {
    chartComp = ChartComponent;
    title = '时间序列-高级';
    Sample: TimelineUtility;
    ngOnInit(): void {
        let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
        let basebar = new OptionBase();
        let timeline = new TimeLineConfig();

        let options = [];
        for (let index = 0; index < 7; index++) {
            var tn: string = index.toString() + "序列";
            timeline.data.push(index);  //这里只能是数字或者日期型字符串！！！
            let v =CommonFunction.getRandomArray(100,7);
            let t = Bar.BarUtility.CreateBar(category, v);
            t.series[0].itemStyle.color = this.getColor;
            t.series[0].itemStyle.opacity = 0.5;
            t.title.text = tn;
            t.series[0].name = tn;
            options.push(t);
        }
        timeline.label = { formatter : (x:any) => { return x + "序列" }};
        timeline.show = true;
        this.Sample = TimelineUtility.CreateTimeLine(basebar, timeline);
        this.Sample.options = options;
        //console.log(this.Sample);
    }
    getColor(params: any) {
        //定义一个颜色集合
        var colorList = ChartColor.colorlist_7_Baidu;
        //对每个bar显示一种颜色
        return colorList[params.dataIndex]
      }
}