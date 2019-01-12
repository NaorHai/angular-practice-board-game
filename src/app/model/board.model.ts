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
    }

    isStepAllowed(p: Position): boolean {
        if (this.isOutBound(p)) {
            return false
        }
        if (this.cells[p.x][p.y].getVisited()) {
            return false;
        }

        return true;
    }

    private isOutBound(p: Position): boolean {
        return p.x >= this.cells.length || p.x >= this.cells.length;
    }
}