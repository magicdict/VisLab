import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { EChartsUtilityModule } from './EChartsUtility/EChartsUtility.module';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';
import { Polar_BasicComponent } from './Polar/polar_basic.component';
import { Radar_BasicComponent } from './radar/radar_basic.component';
import { Scatter_BasicComponent } from './Scatter/scatter_basic.component';
import { BMap_BasicComponent } from './BMap/bmap_basic.component';
import { Map_BasicComponent } from './Map/map_basic.component';
import { Calendar_BasicComponent } from './Calendar/calendar_basic.component';
import { DouluoDalu_Component } from './DouluoDalu/douluodalu.component';
import { Scatter3D_BasicComponent } from './Scatter3D/scatter3d_basic.component';
import { Bar3D_BasicComponent } from './Bar3D/bar3d_basic.component';
import { TimeLineComponent } from './TimeLine/timeline_basic.component'
import { ChartComponent } from './Chart/chart.component';
import { ChartDarkComponent} from './Chart/chart_Dark.component'
import { ComboChartsComponent } from './ComboCharts/combocharts.component';
import { Covid19_Component } from './COVID19/covid19.component';
import { History_Component} from './History/history.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartDarkComponent,
    Bar_BasicComponent,
    Line_BasicComponent,
    Pie_BasicComponent,
    Polar_BasicComponent,
    Radar_BasicComponent,
    Scatter_BasicComponent,
    BMap_BasicComponent,
    Map_BasicComponent,
    Calendar_BasicComponent,
    Scatter3D_BasicComponent,
    Bar3D_BasicComponent,
    TimeLineComponent,
    ComboChartsComponent,
    DouluoDalu_Component,
    Covid19_Component,
    History_Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    EChartsUtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
