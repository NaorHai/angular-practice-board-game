import {Cell} from "../interface/cell.interface";

export class CellModel implements Cell {
    isBomb: boolean = false;
    isVisited: boolean = false;

    constructor(isBomb: boolean = false) {
        this.isBomb = isBomb;
    }

    getBomb(): boolean {
        return this.isBomb;
    }

    getVisited(): boolean {
        return this.isVisited;
    }

    setBomb(b: boolean): void {
        this.isBomb = b;
    }

    setVisited(b: boolean): void {
        this.isVisited = b;
    }
}