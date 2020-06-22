import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MyCommonModule } from './Common/MyCommon.module';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';



@NgModule({
  declarations: [
    AppComponent,
    Bar_BasicComponent,
    Line_BasicComponent,
    Pie_BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    MyCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
