import {Component} from '@angular/core';
import {GameService} from "./service/game.service";
import {Game} from "./interface/game.ineterface";
import {Board} from "./interface/board.interface";

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <div class="header">
            <ul>
                <li>{{'score: ' + game.score}}</li>
                <li>{{'level: ' + level}}</li>
                <li>{{'size: ' + size}}</li>
            </ul>
        </div>
        <div class="ctrl">
            <button (click)="game.up()">up</button>
            <button (click)="game.down()">down</button>
            <button (click)="game.left()">left</button>
            <button (click)="game.right()">right</button>
        </div>
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
            <h1>GAME OVER</h1>
            <button (click)="reload">Restart</button>
        </div>

    `,
    styles: [
            `
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
    title = 'angular-practice-board-game';
    game: Game;
    board: Board;
    size: number = 7;
    level: number = 1;

    constructor(private gameService: GameService) {
        this.game = gameService.get(this.level, this.size);
        this.board = this.game.board;
    }

    get reload() {
        return location.reload();
    }
}


