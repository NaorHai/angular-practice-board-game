import {Game} from "../interface/game.ineterface";
import {Board} from "../interface/board.interface";
import {Position} from "../interface/position.interface";

export class GameModel implements Game {
    board: Board;
    position: Position = {x: 0, y: 0};
    score: number = 0;
    isOver: boolean = false;

    constructor(board: Board) {
        this.board = board;
        this.visit({x: 0, y: 0});
    }

    private doStep(nextPosition) {
        if (this.board.isStepAllowed(nextPosition)) {
            this.position = nextPosition;
            this.visit(nextPosition);
        }
        return this.position;
    }

    private visit(p: Position) {
        this.board.cells[p.x][p.y].isVisited = true;
        if (this.board.cells[p.x][p.y].isBomb) {
            this.isOver = true;
        }
        this.score += 10;
    }

    down(): Position {
        let nextPosition = Object.create(this.position);
        nextPosition.x++;
        return this.doStep(nextPosition);
    }

    left(): Position {
        let nextPosition = Object.create(this.position);
        nextPosition.y--;
        return this.doStep(nextPosition);
    }

    right(): Position {
        let nextPosition = Object.create(this.position);
        nextPosition.y++;
        return this.doStep(nextPosition);
    }

    up(): Position {
        let nextPosition = Object.create(this.position);
        nextPosition.x--;
        return this.doStep(nextPosition);
    }
}