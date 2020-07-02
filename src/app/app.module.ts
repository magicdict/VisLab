import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { OptionCreatorModule } from './OptionCreator/OptionCreator.module';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';
import { Polar_BasicComponent } from './Polar/polar_basic.component';
import { Radar_BasicComponent } from './radar/radar_basic.component';
import { Scatter3D_BasicComponent } from './Scatter3D/scatter3d_basic.component';
import { ChartComponent } from './Chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    Bar_BasicComponent,
    Line_BasicComponent,
    Pie_BasicComponent,
    Polar_BasicComponent,
    Radar_BasicComponent,
    Scatter3D_BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    OptionCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
