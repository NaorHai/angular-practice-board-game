import {Component} from '@angular/core';
import {GameService} from "./service/game.service";
import {Game} from "./interface/game.ineterface";
import {Board} from "./interface/board.interface";

@Component({
    selector: 'app-root',
    template: `

        <div *ngFor="let r of board.cells; index as i">
            <div class="tile"
                 [class.bomb]="board.cells[i][j].isBomb"
                 *ngFor="let c of board.cells; index as j">
            </div>
        </div>

    `,
    styles: [
        `
        .tile {
            display: inline-block;
            margin: 5px;
            width: 50px;
            height: 50px;
            background-color: cornflowerblue;
        }
        .bomb {
            background-color: indianred;
        }
        `

    ]
})
export class AppComponent {
    title = 'angular-practice-board-game';
    game: Game;
    board: Board;
    size: number = 10;
    level: number = 3;

    constructor(private gameService: GameService) {
        this.game = gameService.get(5);
        this.board = this.game.getBoard();
    }
}


