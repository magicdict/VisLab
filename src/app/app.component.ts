import { Component, OnInit } from '@angular/core';
import { CommonFunction } from './Common/common';
import { IBarStardard } from './Common/chartOption'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VisLab';
  Sample = CommonFunction.clone(IBarStardard);
  ngOnInit(): void {
    this.Sample.xAxis.data = ['aaa','bbb'];
    this.Sample.series[0].data = [{ name: 'aaa', value: 100 },{ name: 'bbb', value: 100 }];
  }
}
