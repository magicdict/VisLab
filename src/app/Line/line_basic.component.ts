import { Component, OnInit } from '@angular/core';
import { LineOption } from '../Common/LineOption';
import { BarOption } from '../Common/BarOption';
import { ChartColor, Direction } from '../Common/ChartColor'
import { ChartOption } from '../Common/ChartOption';

@Component({
  templateUrl: './line_basic.component.html'
})
export class Line_BasicComponent implements OnInit {
  title = '折线图-基本';
  category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
  value = [50, 100, 150, 70, 80, 120, 90];
  value2 = [130, 40, 50, 120, 140, 70, 40];
  Sample = LineOption.CreateLine(this.category, this.value);
  Sample_Smooth = LineOption.CreateLine(this.category, this.value);
  GradientSample = LineOption.CreateLine(this.category, this.value);
  GradientSample_H = LineOption.CreateLine(this.category, this.value);
  GradientSample_Background = LineOption.CreateLine(this.category, this.value);
  Bar_Line_Mix = LineOption.CreateLine(this.category, this.value);

  ngOnInit(): void {
    this.Sample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    ChartOption.chart_SetToolBox(this.Sample, true, false, false, false, false, false);

    this.Sample_Smooth.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.Sample_Smooth.series[0]["smooth"] = true;

    this.GradientSample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.GradientSample.series[0]["smooth"] = true;
    this.GradientSample.series[0]["color"] = ChartColor.geLinearGradient(Direction.Horizontal);

    this.GradientSample_H.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.GradientSample_H.series[0]["smooth"] = true;
    this.GradientSample_H.series[0]["color"] = ChartColor.geLinearGradient(Direction.Vertical);

    this.GradientSample_Background.xAxis["axisLabel"] = { interval: 0, rotate: 45 };
    this.GradientSample_Background.series[0]["smooth"] = true;
    ChartOption.series_SetNormalAreaColor(this.GradientSample_Background.series[0], ChartColor.geLinearGradient(Direction.Vertical, '#A9F387', '#48D8BF'));

    this.GradientSample_Background['backgroundColor'] = ChartColor.geLinearGradient(Direction.Vertical, '#c86589', '#06a7ff');
    this.GradientSample_Background.tooltip['formatter'] = this.SpotToolTip;
    this.GradientSample_Background.tooltip['position'] = "inside";

    this.Bar_Line_Mix.series[0]["smooth"] = true;
    this.Bar_Line_Mix.series.push(BarOption.CreateBarItem(this.value2));
    this.Bar_Line_Mix.series[0]['itemStyle'] = { 'normal': { color: ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10') } }
    this.Bar_Line_Mix.series[1]['itemStyle'] = { 'normal': { color: ChartColor.geLinearGradient(Direction.Vertical, '#c86589', '#06a7ff') } }
    ChartOption.series_SetNormalAreaColor(this.Bar_Line_Mix.series[0], ChartColor.geLinearGradient(Direction.Vertical, '#A9F387', '#48D8BF'));
    this.Bar_Line_Mix.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
  }

  SpotToolTip(val: any) {
    let url = "assets/image/" + val[0].name + "/头像.jpg";
    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
      + val[0].name
      + '</div>'
      + '<img src="' + url + '" width="64px" height="64px" />';
  }
}
