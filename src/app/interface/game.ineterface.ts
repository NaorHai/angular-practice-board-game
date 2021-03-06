import {Board} from "./board.interface";
import {Position} from "./position.interface";

export interface Game {
    position: Position;
    board: Board;
    score: number;
    isOver: boolean;

    up(): Position;

    down(): Position;

    left(): Position;

    right(): Position;
}