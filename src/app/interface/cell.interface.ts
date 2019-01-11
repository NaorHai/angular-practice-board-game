export interface Cell {
    isBomb: boolean;
    isVisited: boolean;

    setVisited(b: boolean): void;

    getVisited(): boolean;

    setBomb(b: boolean): void;

    getBomb(): boolean;
}