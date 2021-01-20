class Board {
    private canvas: HTMLCanvasElement;

    constructor(element: HTMLElement, width: number, height: number) {
        this.canvas = this.createCanvas(element, width, height);
    }

    private createCanvas(element: HTMLElement, width: number, height: number): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.width = width;
        canvas.height = height;
        canvas.style.backgroundColor = "#3e3e3e";
        element.appendChild(canvas);
        return canvas;
    }
}
