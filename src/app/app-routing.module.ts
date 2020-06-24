import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';
import { Polar_BasicComponent } from './Polar/polar_basic.component';



const routes: Routes = [
  {
    path: 'basic/bar', component: Bar_BasicComponent,
  },
  {
    path: 'basic/line', component: Line_BasicComponent,
  },
  {
    path: 'basic/pie', component: Pie_BasicComponent,
  },
  {
    path: 'basic/polar', component: Polar_BasicComponent,
  },
  {
    path: '', redirectTo: 'basic/bar', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
