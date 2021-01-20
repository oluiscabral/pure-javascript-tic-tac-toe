class TicTacToe {
    private canvas: Presentation;
    constructor(element: HTMLElement, width: number, height: number) {
        this.canvas = new Presentation(element, width, height);
    }
}
