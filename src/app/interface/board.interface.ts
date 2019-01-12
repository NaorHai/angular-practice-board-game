import {Cell} from "./cell.interface";
import {Position} from "./position.interface";

export interface Board {
    cells: Cell[][];

    isStepAllowed(p: Position): boolean;

}