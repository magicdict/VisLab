import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';



const routes: Routes = [
  {
    path: 'basic/bar', component: Bar_BasicComponent,
  },
  {
    path: 'basic/line', component: Line_BasicComponent,
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
