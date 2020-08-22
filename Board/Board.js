import Square from './Square/Square.js';

export default class Board {
    // Properties //
    #game;
    #size;
    #grid = 3;
    #gridSize;
    #active = true;
    #resizeObservers = [];

    // Contents //
    #squares;

    // Getters and setters //
    get active() {
        return this.#active;
    }

    // Public methods //
    resize(value) {
        this.#size = value * this.#sizePercentage / 100;
        this.#gridSize = Math.round(value / this.#grid);
        this.#notifyOnResize(this.#gridSize);
    }

    draw() {
        const lineWidth = this.#gridSize / 40;
        this.#game.drawingUtils.setLineStyle(null, lineWidth);
        this.#game.drawingUtils.drawMultipleHorizontalLines({ x: 0, y: this.#gridSize }, this.#size, this.#gridSize, this.#grid - 1);
        this.#game.drawingUtils.setLineStyle(null, lineWidth);
        this.#game.drawingUtils.drawMultipleVerticalLines({ x: this.#gridSize, y: 0 }, this.#size, this.#gridSize, this.#grid - 1);
        this.#squaresDraw();
    }

    mouseClick(mouseX, mouseY) {
        alert("CLICKEEEED ON BOARD!!!!");
    }

    mouseMove(mouseX, mouseY) {
        console.log("Mouse moves on board");
    }

    mouseOut(mouseX, mouseY) {
        console.log("Mouse out on board");
    }

    // Private methods //
    #addResizeObserver = (observer) => {
        this.#resizeObservers.push(observer);
    }

    #notifyOnResize = (value) => {
        for (let observer of this.#resizeObservers) {
            observer.resize(value);
        }
    }

    #createSquares = () => {
        const squares = [];
        let gridRow = 0;
        let gridCol = 0;
        for (let pos = 0; pos < this.#grid ** 2; pos++) {
            squares.push(new Square(gridRow, gridCol));
            gridCol++;
            if (gridCol == this.#grid) {
                gridCol = 0;
                gridRow++;
            }
        }
        for (let square of squares) {
            this.#addResizeObserver(square);
        }
        return squares;
    }

    #squaresDraw = () => {
        for (let square of this.#squares) {
            square.draw();
        }
    }

    // This content class already initialize itself on constructor //
    constructor(gridSize) {
        this.#gridSize = gridSize;
    }
}
