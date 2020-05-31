import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameplayRoutingModule } from './gameplay-routing.module';
import { PlayFieldPage } from './pages/play-field/play-field.page';
import { MaterialDesignModule } from './../../shared/modules/material-design/material-design.module';


@NgModule({
  declarations: [PlayFieldPage],
  imports: [
    CommonModule,
    GameplayRoutingModule,
    MaterialDesignModule,
  ]
})
export class GameplayModule { }
