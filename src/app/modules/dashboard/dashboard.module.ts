import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HomePage } from './pages/home/home.page';


@NgModule({
  declarations: [DashboardPage, HomePage],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
