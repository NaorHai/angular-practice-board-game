import {Board} from "../interface/board.interface";
import {Cell} from "../interface/cell.interface";
import {Position} from "../interface/position.interface";
import {CellModel} from "./cell.model";

export class BoardModel implements Board {
    cells: Cell[][] = [];

    constructor(size: number) {
        for (let i: number = 0; i < size; i++) {
            this.cells[i] = [];
            for (let j: number = 0; j < size; j++) {
                this.cells[i][j] = new CellModel();
            }
        }
        this.cells[0][0].isVisited = true;
    }

    isStepAllowed(p: Position): boolean {
        if (this.isOutBound(p)) {
            return false
        }
        if (this.cells[p.x][p.y].isVisited) {
            return false;
        }

        return true;
    }

    private isOutBound(p: Position): boolean {
        let tooBig = p.x >= this.cells.length || p.x >= this.cells.length;
        let tooSmall = p.x < 0 || p.y < 0;
        return tooBig || tooSmall;
    }
}