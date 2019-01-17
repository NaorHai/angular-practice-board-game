import { NgModule } from '@angular/core';
import { GameUiComponent } from './game-ui.component';
import {HeaderComponent} from "./header.component";
import {MainComponent} from "./main.component";
import {ControlBoxComponent} from "./control-box.component";
import {GameService, BoardService} from "@nice/game-service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
      GameUiComponent,
      HeaderComponent,
      MainComponent,
      ControlBoxComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [GameUiComponent],
  providers: [GameService,BoardService ]

})
export class GameUiModule { }
