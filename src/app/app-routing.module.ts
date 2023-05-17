import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { ChartjsComponent } from './dashboard/components/chartjs/chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'authors',
    component: ChartjsComponent,
  },
  {
    path: 'documents',
    component: ChartjsComponent,
  },
  {
    path: 'publishers',
    component: ChartjsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
