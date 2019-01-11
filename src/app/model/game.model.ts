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

    down(): Position {
        let nextPosition = this.position;
        nextPosition.y--;

        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
        }
        return this.position;
    }

    left(): Position {
        let nextPosition = this.position;
        nextPosition.x--;

        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
        }
        return this.position;
    }

    right(): Position {
        let nextPosition = this.position;
        nextPosition.x++;

        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
        }
        return this.position;
    }

    up(): Position {
        let nextPosition = this.position;
        nextPosition.y++;

        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
        }
        return this.position;
    }

    getBoard(): Board {
        return this.board;
    }

    getPosition(): Position {
        return this.position
    }

    getScore(): number {
        return this.score;
    }
}