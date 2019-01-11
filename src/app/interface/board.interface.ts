import {Cell} from "./cell.interface";
import {Position} from "./position.interface";

export interface Board {
    size: number;
    cells: Cell[][];

    isStepAllowed(p: Position): boolean;

}