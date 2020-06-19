import { Component, OnInit } from '@angular/core';
import { ILineStardard } from '../Common/chartOption';
import { CommonFunction } from '../Common/common';

@Component({
  templateUrl: './line_basic.component.html'
})
export class Line_BasicComponent implements OnInit {
  title = '折线图-基本';
  Sample = CommonFunction.clone(ILineStardard);
  Sample_Smooth = CommonFunction.clone(ILineStardard);
  GradientSample = CommonFunction.clone(ILineStardard);
  GradientSample_H = CommonFunction.clone(ILineStardard);
  GradientSample_Background = CommonFunction.clone(ILineStardard);

  ngOnInit(): void {
    this.Sample.xAxis.data = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    this.Sample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.Sample.series.push({ type: 'line', data: [50, 100, 150, 70, 80, 120, 90] });

    this.Sample_Smooth.xAxis.data = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    this.Sample_Smooth.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.Sample_Smooth.series.push({ type: 'line', data: [50, 100, 150, 70, 80, 120, 90], smooth: true });

    this.GradientSample.xAxis.data = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    this.GradientSample.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    let seriesItem = {
      type: 'line',
      data: [50, 100, 150, 70, 80, 120, 90],
      smooth: true,
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'white' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'black' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
      },
    };
    this.GradientSample.series.push(seriesItem);

    this.GradientSample_H.xAxis.data = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    this.GradientSample_H.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    let seriesItem_H = {
      type: 'line',
      data: [50, 100, 150, 70, 80, 120, 90],
      smooth: true,
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'white' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'black' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
      },
    };
    this.GradientSample_H.series.push(seriesItem_H);


    this.GradientSample_Background.xAxis.data = ['唐三', '戴沐白', "马红俊", "奥斯卡", "小舞", "宁荣荣", "朱竹清"];
    this.GradientSample_Background.xAxis["axisLabel"] = { interval: 0, rotate: 45 }
    this.GradientSample_Background.series.push({
      type: 'line',
      data: [50, 100, 150, 70, 80, 120, 90],
      smooth: true,
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#A9F387' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#48D8BF' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
        }
      },
    });
    this.GradientSample_Background['backgroundColor'] = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#c86589' // 0% 处的颜色
      }, {
        offset: 1,
        color: '#06a7ff' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }
    this.GradientSample_Background.tooltip['formatter'] = this.SpotToolTip;
    this.GradientSample_Background.tooltip['position'] = "inside";
  }
  SpotToolTip(val: any) {
    console.log(val);
    let url = "assets/image/" + val[0].name + "/头像.jpg";
    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
      + val[0].name
      + '</div>'
      + '<img src="' + url + '" width="64px" height="64px" />';
  }
}
