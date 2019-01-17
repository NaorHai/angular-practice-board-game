import { Component, OnInit } from '@angular/core';
import {GameService} from "@nice/game-service";

@Component({
  selector: 'app-main',
  template: `
      <div class="board" *ngIf="!game.isOver">
          <div *ngFor="let r of board.cells; index as i">
              <div class="tile"
                   [class.visited]="board.cells[i][j].isVisited"
                   [class.current]="i == game.position.x && j == game.position.y"
                   *ngFor="let c of board.cells; index as j">
              </div>
          </div>
      </div>
      <div class="game-over"
           *ngIf="game.isOver">
          <iframe style="padding-right: 65px" src="https://giphy.com/embed/dkuZHIQsslFfy" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <button type="button" class="btn btn-primary" (click)="reload">Restart</button>
      </div>
  `,
  styles: [`
      .btn-primary{
          margin-bottom: 15px;
      }
      .align-left{
          float: left;
      }
      li {
          list-style-type: none;
      }
      .tile {
          display: inline-block;
          margin: 5px;
          width: 50px;
          height: 50px;
          background-color: cornflowerblue;
      }

      .visited {
          background-color: darkseagreen;
      }
      .current {
          background-color: darkolivegreen;
      }`]
})
export class MainComponent {
  game: any;
  board: any;
  constructor(private gameService: GameService) {
    this.game = gameService.game;
    this.board = gameService.board;
  }

    get reload() {
        return location.reload();
    }

}
