import Square from './Square/Square.js';

export default class Board {
    constructor() {
        // Properties //
        let grid = 3;
        let gridSize;

        // Contents //
        const square = createSquares();

        // Getters and Setters //

        // Public methods //
        this.resize = (value) => {
            gridSize = value / grid;
            updateSquares();
        }

        this.refresh = (size, context) => {
            for (let pos = 0; pos < grid ** 2; pos++)
                square[pos].draw();
        }

        this.mouseOver = (mouseX, mouseY) => {
            for (let pos = 0; pos < grid ** 2; pos++)
                if (square[pos].checkMouseOver(mouseX, mouseY))
                    break;
        }

        // Private methods //
        function createSquares() {
            const square = [];
            for (let pos = 0; pos < grid ** 2; pos++)
                square.push(new Square());
            return square;
        }

        function updateSquares() {
            let gridRow = 0;
            let gridCol = 0;

            for (let pos = 0; pos < grid ** 2; pos++) {
                square[pos].update(gridRow, gridCol, gridSize);
                gridCol++;
                if (gridCol == grid) {
                    gridCol = 0;
                    gridRow++;
                }
            }
        }
    }
}
