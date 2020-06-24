import { Component, OnInit } from '@angular/core';
import { BarOption } from '../Common/BarOption';
import { ChartOption} from '../Common/ChartOption';
import { ChartColor, Direction } from '../Common/ChartColor';

@Component({
  templateUrl: './bar_basic.component.html'
})
export class Bar_BasicComponent implements OnInit {
  title = '柱状图-基本';
  Sample: any
  RainbowSample: any;
  RainbowSample_Dark: any;
  GradientSample: any;
  Sample_dark_GradientSample: any;
  ngOnInit(): void {

    let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    let value = [50, 100, 150, 70, 80, 120, 90];

    this.Sample = BarOption.CreateBar(category, value);
    this.Sample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }

    this.RainbowSample = BarOption.CreateBar(category, value);
    this.RainbowSample.xAxis["show"] = false;
    ChartOption.series_SetBarItemStyle(this.RainbowSample.series[0],ChartColor.colorlist_7_Baidu); 
    

    this.RainbowSample_Dark = BarOption.CreateBar(category, value);
    ChartOption.chart_SetBackGroundColor(this.RainbowSample_Dark,'#000000');//背景色
    this.RainbowSample_Dark.xAxis["show"] = false;
    this.RainbowSample_Dark.yAxis["axisLabel"] = { color: "#FFFFFF" };
    ChartOption.series_SetBarItemStyle(this.RainbowSample_Dark.series[0],ChartColor.colorlist_7_Baidu); 


    this.GradientSample = BarOption.CreateBar(category, value);
    this.GradientSample.xAxis["show"] = false;
    this.GradientSample.series[0]['itemStyle'] = //定义每个bar的颜色和其上是否显示值
    {
      normal: {
        color: ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10'),
      }
    }

    this.Sample_dark_GradientSample = BarOption.CreateBar(category, value);
    ChartOption.chart_SetBackGroundColor(this.Sample_dark_GradientSample,'#000000');//背景色
    this.Sample_dark_GradientSample.xAxis["show"] = false;
    this.Sample_dark_GradientSample.yAxis["axisLabel"] = { color: "#FFFFFF" };
    this.Sample_dark_GradientSample.series[0]['itemStyle'] = //定义每个bar的颜色和其上是否显示值
    {
      normal: {
        color: ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10'),
        opacity: 0.75,
        label: {
          color: '#FEB64D',
          //每个bar的最高点值显示在bar顶部
          show: true,
          position: 'top',
          //值和x轴分类的显示格式(这里是换行显示)
          formatter: '{b}\n{c}'
        }
      }
    }
    this.Sample_dark_GradientSample['tooltip'] = {
      trigger: 'item',
      formatter: this.SpotToolTip,
      position: 'inside',
    }
  }

  SpotToolTip(val: any) {

    let url = "assets/image/" + val.name + "/头像.jpg";
    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
      + val.name
      + '</div>'
      + '<img src="' + url + '" width="64px" height="64px" />';
  }

}