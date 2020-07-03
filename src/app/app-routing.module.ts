import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';
import { Polar_BasicComponent } from './Polar/polar_basic.component';
import { Scatter3D_BasicComponent } from './Scatter3D/scatter3d_basic.component';
import { Radar_BasicComponent } from './radar/radar_basic.component';
import { Bar3D_BasicComponent } from './Bar3D/bar3d_basic.component';

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
    path: 'basic/radar', component: Radar_BasicComponent,
  },
  {
    path: '3d/scatter3d', component: Scatter3D_BasicComponent,
  },
  {
    path: '3d/bar3d', component: Bar3D_BasicComponent,
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
