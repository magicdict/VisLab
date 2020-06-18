import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bar_BasicComponent } from './Bar/bar_basic.component';



const routes: Routes = [
  {
    path: 'bar/basic', component: Bar_BasicComponent,
  },
  {
    path: '', redirectTo: 'bar/basic', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
