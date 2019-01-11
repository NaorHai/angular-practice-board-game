import {Injectable} from '@angular/core';
import {Game} from "../interface/game.ineterface";
import {Board} from "../interface/board.interface";
import {BoardService} from "./board.service";
import {GameModel} from "../model/game.model";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    level: number;
    size: number;
    game: Game;
    board: Board;

    constructor(private boardService: BoardService) {
    }

    init(level: number = 1, size: number = 10) : Game {
        this.board = this.boardService.get(size, level);
        this.game = new GameModel(this.board);

        return this.game;
    }
}
