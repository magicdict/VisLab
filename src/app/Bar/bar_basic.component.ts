import { Component, OnInit } from '@angular/core';
import { IBarStardard } from '../Common/chartOption';
import { CommonFunction } from '../Common/common';

@Component({
  templateUrl: './bar_basic.component.html'
})
export class Bar_BasicComponent implements OnInit {
  title = '柱状图-基本';
  Sample = CommonFunction.clone(IBarStardard);
  ngOnInit(): void {
    this.Sample.xAxis.data = ['aaa','bbb'];
    this.Sample.series[0].data = [{ name: 'aaa', value: 100 },{ name: 'bbb', value: 100 }];
  }
}