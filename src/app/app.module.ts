import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MyCommonModule } from './Common/MyCommon.module';



@NgModule({
  declarations: [
    AppComponent
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
