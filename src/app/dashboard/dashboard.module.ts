import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs/chartjs.component';

@NgModule({
  declarations: [ChartjsComponent],
  imports: [CommonModule],
  exports: [ChartjsComponent],
})
export class DashboardModule {}
