import {Component} from '@angular/core';
import {GameService} from "./service/game.service";
import {Game} from "./interface/game.ineterface";
import {Board} from "./interface/board.interface";

@Component({
    selector: 'app-root',
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
            </div>
        </div> 
    `,
    styles: [
            `
            .btn-primary{
                margin-bottom: 15px;
            }
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
            }
        `

    ]
})
export class AppComponent {
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

    get reload() {
        return location.reload();
    }
}


