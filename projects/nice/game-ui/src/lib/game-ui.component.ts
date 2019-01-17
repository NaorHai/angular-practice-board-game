import { Component, OnInit } from '@angular/core';
import {GameService, Game, Board} from "@nice/game-service";

@Component({
  selector: 'game-ui',
  template: `
      <div class="header">
          <h1>{{title}}</h1>
          <h3>{{subTitle}}</h3>
      </div>
      <hr>
      <div class="container">
          <div class="inner-container">
              <app-control-box class="align-left"></app-control-box>
              <app-header class="align-left"></app-header>
              <div class="clear"></div>
              <app-main></app-main>
          </div>
      </div>
  `,
    styles: [
        `
            .container{
                width: 100%;
            }
            .inner-container{
                width: 50%;
                padding-left: 65px;
                padding-top: 10px;
                margin: 0 auto;
                background: rgba(255,255,255,0.6);
                border: 5px olivedrab solid;
                border-radius: 5px;
            }
            .header{
                padding-left: 10px;
            }
            h1{
                font-family: 'Gochi Hand', cursive;
            }
            h3{
                font-family: 'Caveat', cursive;
            }

      `]
})
export class GameUiComponent {

    title = 'Board Game';
    subTitle = "Practice - a game created by Naor Haimov & Nir Mekin";
    game: Game;
    board: Board;
    size: number = 7;
    level: number = 5;

    constructor(private gameService: GameService) {
        this.game = gameService.get(this.level, this.size);
        this.board = this.game.board;
    }

    // get reload() {
    //     return location.reload();
    // }
}
