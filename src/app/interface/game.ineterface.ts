import {Board} from "./board.interface";
import {Position} from "./position.interface";

export interface Game {
    position: Position;
    board: Board;
    score: number;

    up(): Position;
    down(): Position;
    left(): Position;
    right(): Position;

    getScore(): number;
    setScore(s: number): void;
    getBoard(): Board;
    getPosition(): Position;

}