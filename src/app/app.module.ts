import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GameService} from "./service/game.service";
import {BoardService} from "./service/board.service";
import { HeaderComponent } from './component/header.component';
import { ControlBoxComponent } from './component/control-box.component';
import { MainComponent } from './component/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlBoxComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService, BoardService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
