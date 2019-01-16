import {Injectable} from '@angular/core';
import {Game} from "../interface/game.ineterface";
import {Board} from "../interface/board.interface";
import {BoardService} from "./board.service";
import {GameModel} from "../model/game.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    level: number;
    game: Game;
    board: Board;

    constructor(private boardService: BoardService) {
    }

    get(level: number = 1, size: number = 10): Game {
        this.board = this.boardService.get(size, level);
        this.game = new GameModel(this.board);
        this.level = level;
        return this.game;
    }

}