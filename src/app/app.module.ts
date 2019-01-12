import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GameService} from "./service/game.service";
import {BoardService} from "./service/board.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
