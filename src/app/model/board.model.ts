import {Board} from "../interface/board.interface";
import {Cell} from "../interface/cell.interface";
import {Position} from "../interface/position.interface";
import {CellModel} from "./cell.model";

export class BoardModel implements Board {
    size: number;
    public cells: Cell[][];

    constructor(size: number) {
        this.size = size;
        this.cells = new CellModel[size][size];
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

    isOutBound(p: Position): boolean {
        return p.x >= this.size || p.x >= this.size;
    }
}