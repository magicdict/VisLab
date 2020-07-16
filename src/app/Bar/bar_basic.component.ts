import { Component, OnInit } from '@angular/core';
import { BarOption } from '../OptionCreator/BarOption';
import { OptionHelper } from '../OptionCreator/OptionHelper';
import { ChartColor } from '../OptionCreator/ChartColor';
import { Grid } from '../OptionCreator/OptionBase';
import { Direction } from '../OptionCreator/enum';

@Component({
  templateUrl: './bar_basic.component.html'
})
export class Bar_BasicComponent implements OnInit {
  title = '柱状图-基本';
  Sample: BarOption
  RainbowSample: BarOption;
  RainbowSample_Dark: BarOption;
  GradientSample: BarOption;
  Sample_dark_GradientSample: BarOption;
  RainbowSample_PictorialBar: BarOption;
  ngOnInit(): void {

    let category = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    let value = [50, 100, 150, 70, 80, 120, 90];

    this.Sample = BarOption.CreateBar(category, value);
    this.Sample.xAxis[0].axisLabel = { interval: 0, rotate: 45 }

    this.RainbowSample = BarOption.CreateBar(category, value);
    this.RainbowSample.xAxis[0].show = true;
    this.RainbowSample.xAxis[0].axisLabel = { interval: 0, rotate: 45, color: "#FFFFFF" };
    this.RainbowSample.xAxis[0].axisLine = { lineStyle: { color: "#FFFFFF" } };
    this.RainbowSample.yAxis[0].show = true;
    this.RainbowSample.yAxis[0].axisLabel = { color: "#FFFFFF" };
    this.RainbowSample.yAxis[0].axisLine = { lineStyle: { color: "#FFFFFF" } };
    this.RainbowSample.series[0].itemStyle = {
      color: this.getColor,
      opacity: 0.5
    };
    this.RainbowSample.series[0].emphasis.itemStyle = {
      opacity: 1
    };
    var img = new Image();
    img.src = '/assets/image/Background.jpg';
    this.RainbowSample.backgroundColor = { 'image': img, type: "pattern", repeat: "repeat" };
    let imggrid = new Grid();
    imggrid.height = 64;
    imggrid.width = 64;
    imggrid.top = 10;
    imggrid.right = 10;
    let g = OptionHelper.chart_CreateGraphic_Image("assets/image/小舞/头像.png", imggrid, null)
    this.RainbowSample.graphic = [g];

    this.RainbowSample_Dark = BarOption.CreateBar(category, value);
    OptionHelper.chart_SetBackGroundColor(this.RainbowSample_Dark, '#000000');//背景色
    this.RainbowSample_Dark.xAxis[0].show = false;
    this.RainbowSample_Dark.yAxis[0].axisLabel = { color: "#FFFFFF" };
    this.RainbowSample_Dark.series[0].itemStyle = {
      color: this.getColor,
      opacity: 0.5
    };
    this.RainbowSample_Dark.series[0].emphasis.itemStyle = {
      opacity: 1
    };
 
    this.GradientSample = BarOption.CreateBar(category, value);
    this.GradientSample.xAxis[0].show = false;
    this.GradientSample.series[0].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10');

    this.Sample_dark_GradientSample = BarOption.CreateBar(category, value);
    OptionHelper.chart_SetBackGroundColor(this.Sample_dark_GradientSample, '#000000');//背景色
    this.Sample_dark_GradientSample.xAxis[0].show = false;
    this.Sample_dark_GradientSample.yAxis[0].axisLabel = { color: "#FFFFFF" };
    //样式名不支持中文！！！
    let richitem = {}
    category.forEach(element => {
      richitem[encodeURI(element).replace(/%/g, "")] = OptionHelper.series_CreateRichImageStyleItem("assets/image/" + element + "/头像.jpg", 25, 25);
    });

    this.Sample_dark_GradientSample.series[0].itemStyle.color = ChartColor.geLinearGradient(Direction.Vertical, '#32D3EB', '#FCCE10');
    this.Sample_dark_GradientSample.series[0].itemStyle.opacity = 0.75;
    this.Sample_dark_GradientSample.series[0].label.color = "#FEB64D";
    this.Sample_dark_GradientSample.series[0].label.position = "top";
    this.Sample_dark_GradientSample.series[0].label.formatter = this.symbol;
    this.Sample_dark_GradientSample.series[0].label.rich = richitem;
    this.Sample_dark_GradientSample.series[0].label.show = true;
    this.Sample_dark_GradientSample.tooltip = {
      trigger: 'item',
      formatter: this.SpotToolTip,
      position: 'inside',
    }

    this.RainbowSample_PictorialBar = BarOption.CreatePictorialBar(category, value, false);
    this.RainbowSample_PictorialBar.xAxis[0].show = false;
    this.RainbowSample_PictorialBar.yAxis[0].show = false;
    this.RainbowSample_PictorialBar.series[0]['barCategoryGap'] = '-130%';
    this.RainbowSample_PictorialBar.series[0].itemStyle = {
      color: this.getColor,
      opacity: 0.5
    };
    this.RainbowSample_PictorialBar.series[0].emphasis.itemStyle = {
      opacity: 1
    };
    this.RainbowSample_PictorialBar.series[0].label.position = "top";
    this.RainbowSample_PictorialBar.series[0].label.rich = richitem;
    this.RainbowSample_PictorialBar.series[0].label.formatter = this.symbol;
    this.RainbowSample_PictorialBar['tooltip'] = {
      trigger: 'item',
      formatter: this.SpotToolTip,
      position: 'inside',
    }

  }

  getColor(params: any) {
    //定义一个颜色集合
    var colorList = ChartColor.colorlist_7_Baidu;
    //对每个bar显示一种颜色
    return colorList[params.dataIndex]
  }

  symbol(val: any) {
    let name: string = val.name;
    return "{" + encodeURI(name).replace(/%/g, "") + "|}"
  }

  SpotToolTip(val: any) {

    let url = "assets/image/" + val.name + "/头像.jpg";
    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
      + val.name
      + '</div>'
      + '<img src="' + url + '" width="64px" height="64px" />';
  }

}