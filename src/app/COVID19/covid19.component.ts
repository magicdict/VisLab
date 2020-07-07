import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarOption } from '../OptionCreator/BarOption';
import { LineOption } from '../OptionCreator/LineOption';
import { Axis } from '../OptionCreator/OptionBase';
import { ChartComponent } from '../Chart/chart.component';
@Component({
    templateUrl: './covid19.component.html'
})
export class Covid19_Component implements OnInit {
    title = '新冠肺炎2019';
    chartComp = ChartComponent;
    constructor(private http: HttpClient) {

    }
    Line_Total: BarOption;
    ngOnInit(): void {
        let priceMap = this.http.get<{ PublishDate: string, Confirmed_Total: number,Recoved_Total:number,Death_Total:number }[]>("assets/json/Daily_COVID19.json").toPromise();
        priceMap.then(
            r => {
                r = r.filter(x => x.Confirmed_Total !== 0); //除去收尾的0数据
                this.Line_Total = LineOption.CreateLine(r.map(x => x.PublishDate.substring(0, 10)), r.map(x => x.Confirmed_Total))
                this.Line_Total.series.push(LineOption.CreateLineItem(r.map(x=>x.Recoved_Total)))
                this.Line_Total.series.push(LineOption.CreateLineItem(r.map(x=>x.Death_Total)));
                //双坐标轴
                let yAxis1 = new Axis();
                let yAxis2 = new Axis();
                this.Line_Total.yAxis = [yAxis1,yAxis2]
                this.Line_Total.series[0].itemStyle.color = "red";
                this.Line_Total.series[0].name = "累积确诊人数";
                this.Line_Total.series[0].yAxisIndex = 0;

                this.Line_Total.series[1].itemStyle.color = "green";
                this.Line_Total.series[1].name = "累积治疗人数";
                this.Line_Total.series[1].yAxisIndex = 0;

                this.Line_Total.series[2].itemStyle.color = "black";
                this.Line_Total.series[2].name = "累积死亡人数";
                this.Line_Total.series[2].yAxisIndex = 1;
            }
        )
    }
}