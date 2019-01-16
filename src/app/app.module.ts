import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header.component';
import { ControlBoxComponent } from './component/control-box.component';
import { MainComponent } from './component/main.component';
import {GameService, BoardService} from "@nice/game-service";

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
