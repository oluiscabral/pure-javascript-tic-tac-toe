class Presentation {
    private canvas: HTMLCanvasElement;

    constructor(element: HTMLElement, width: number, height: number) {
        this.canvas = this.createCanvas(element, width, height);
    }

    public getCanvas() {
        return this.canvas;
    }

    private createCanvas(element: HTMLElement, width: number, height: number): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.width = width;
        canvas.height = height;
        element.appendChild(canvas);
        return canvas;
    }
}
