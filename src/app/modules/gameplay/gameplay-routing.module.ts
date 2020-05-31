import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayFieldPage } from './pages/play-field/play-field.page';


const routes: Routes = [
  {
    path: '',
    component: PlayFieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameplayRoutingModule { }
