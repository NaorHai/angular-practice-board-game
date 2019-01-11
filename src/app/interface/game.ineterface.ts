import {Board} from "./board.interface";

export interface Game {
    position: Position;
    board: Board;
    score: number;
    level: number;

    up(): Position;
    down(): Position;
    left(): Position;
    right(): Position;
}