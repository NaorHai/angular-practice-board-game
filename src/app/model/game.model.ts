import {Game} from "../interface/game.ineterface";
import {Board} from "../interface/board.interface";
import {Position} from "../interface/position.interface";

export class GameModel implements Game {
    board: Board;
    position: Position;
    score: number = 0;

    constructor(board: Board) {
        this.board = board;
    }

    private doStep(nextPosition) {
        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
        }
        return this.position;
    }

    down(): Position {
        let nextPosition = this.position;
        nextPosition.y--;
        return this.doStep(nextPosition);
    }

    left(): Position {
        let nextPosition = this.position;
        nextPosition.x--;
        return this.doStep(nextPosition);
    }

    right(): Position {
        let nextPosition = this.position;
        nextPosition.x++;
        return this.doStep(nextPosition);
    }

    up(): Position {
        let nextPosition = this.position;
        nextPosition.y++;
        return this.doStep(nextPosition);
    }
}