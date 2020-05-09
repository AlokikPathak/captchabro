import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HomePage } from './pages/home/home.page';
import { MaterialDesignModule } from './../../shared/modules/material-design/material-design.module';


@NgModule({
  declarations: [DashboardPage, HomePage],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ]
})
export class DashboardModule { }
