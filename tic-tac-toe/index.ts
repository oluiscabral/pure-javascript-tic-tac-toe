class TicTacToe {
    private board: Board;
    constructor(element: HTMLElement, width: number, height: number) {
        this.board = new Board(element, width, height);
    }
}
