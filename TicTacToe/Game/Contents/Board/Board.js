import Square from './Square/Square.js';

export default class Board {
    constructor() {
        // Properties //
        let size;
        let grid = 3;
        let gridSize;
        let active = true;
        let lineWidth; // it's used for set size limits to each board square

        // Contents //
        const square = createSquares();

        // Getters and setters //
        Object.defineProperty(this, 'active', {
            get: () => active,
        });

        // Public methods //
        this.resize = (value) => {
            console.log("Canvas size:" + value);
            gridSize = Math.round(value / grid);
            size = gridSize * grid;
            lineWidth = gridSize / 40;
            updateSquares();
        }

        this.draw = (context) => {
            context.strokeStyle = '#FFFFFF';
            context.lineWidth = lineWidth;

            context.beginPath();
            context.moveTo(gridSize, 0);
            context.lineTo(gridSize, size);
            context.stroke();

            context.beginPath();
            context.moveTo(gridSize * 2, 0);
            context.lineTo(gridSize * 2, size);
            context.stroke();

            context.beginPath();
            context.moveTo(0, gridSize);
            context.lineTo(size, gridSize);
            context.stroke();

            context.beginPath();
            context.moveTo(0, gridSize * 2);
            context.lineTo(size, gridSize * 2);
            context.stroke();
        }

        this.mouseMove = (mouseX, mouseY, context) => {
            for (let pos = 0; pos < grid ** 2; pos++)
                square[pos].mouseMove(mouseX, mouseY, context, lineWidth);
        }

        this.mouseOut = (context) => {
            for (let pos = 0; pos < grid ** 2; pos++)
                if (square[pos].mouseOut(context, lineWidth))
                    break;
        }

        // Private methods //
        function createSquares() {
            const square = [];
            let gridRow = 0;
            let gridCol = 0;
            for (let pos = 0; pos < grid ** 2; pos++) {
                square.push(new Square(gridRow, gridCol));
                gridCol++;
                if (gridCol == grid) {
                    gridCol = 0;
                    gridRow++;
                }
            }
            return square;
        }

        function updateSquares() {
            for (let pos = 0; pos < grid ** 2; pos++)
                square[pos].update(gridSize);

            for (let pos = 0; pos < grid ** 2; pos++)
                square[pos].info();
        }
    }
}
