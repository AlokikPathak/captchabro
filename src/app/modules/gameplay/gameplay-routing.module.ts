import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayFieldPage } from './pages/play-field/play-field.page';
import { PaymentsPage } from './pages/payments/payments.page'


const routes: Routes = [
  {
    path: '',
    component: PlayFieldPage
  },
  {
    path: 'payments',
    component: PaymentsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameplayRoutingModule { }
