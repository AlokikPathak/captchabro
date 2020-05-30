import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameplayRoutingModule } from './gameplay-routing.module';
import { PlayFieldPage } from './pages/play-field/play-field.page';


@NgModule({
  declarations: [PlayFieldPage],
  imports: [
    CommonModule,
    GameplayRoutingModule
  ]
})
export class GameplayModule { }
