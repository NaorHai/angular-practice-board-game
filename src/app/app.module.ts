import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GameUiModule} from "@nice/game-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameUiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
