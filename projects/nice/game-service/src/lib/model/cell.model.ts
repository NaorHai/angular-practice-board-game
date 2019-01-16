import {Cell} from "../interface/cell.interface";

export class CellModel implements Cell {
    isBomb: boolean = false;
    isVisited: boolean = false;

    constructor(isBomb: boolean = false) {
        this.isBomb = isBomb;
    }
}