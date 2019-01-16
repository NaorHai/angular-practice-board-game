import {Injectable} from '@angular/core';
import {Board} from "../interface/board.interface";
import {BoardModel} from "../model/board.model";
import {UtilsService} from "./utils.service";

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    board: Board;
    size: number;
    level: number;

    constructor(private utils: UtilsService) {
    }

    get(size: number, level: number): Board {
        this.size = size;
        this.level = level;
        this.board = new BoardModel(size);
        this.deployBombs();

        return this.board;
    }

    deployBombs(): void {
        let row, col, cell, i = 0;

        while (i < this.level) {
            row = this.utils.getRandom(0, this.size - 1);
            col = this.utils.getRandom(0, this.size - 1);

            cell = this.board.cells[row][col];
            if (cell.isBomb || this.isStart(row, col)) {
                continue;
            }
            cell.isBomb = true;
            i++;
        }
    }

    isStart(x, y): boolean {
        return x === 0 && y === 0;
    }
}
