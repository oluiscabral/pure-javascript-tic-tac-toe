import Square from './Square/Square.js';

export default class Board {
    constructor() {
        // Properties //
        let squareUnit;

        // Contents //
        let square = createSquares();

        // Getters and Setters //

        // Public methods //

        this.resize = (value) => {
            squareUnit = value / 3;
            updateSquares(squareUnit);
        }

        // Private methods //
        function createSquares() {
            return [
                [
                    new Square(0, 0, squareUnit),
                    new Square(0, 1, squareUnit),
                    new Square(0, 2, squareUnit),
                ],
                [
                    new Square(1, 0, squareUnit),
                    new Square(1, 1, squareUnit),
                    new Square(1, 2, squareUnit),
                ],
                [
                    new Square(2, 0, squareUnit),
                    new Square(2, 1, squareUnit),
                    new Square(2, 2, squareUnit),
                ],
            ];
        }

        function updateSquares(value) {
            for (let i = 0; i < 3; i++)
                for (let z = 0; z < 3; z++) {
                    square[i][z].update(value);
                    square[i][z].draw();
                }


        }

        this.draw = (size, context) => {
            for (let i = 0; i < 3; i++)
                for (let z = 0; z < 3; z++)
                    square[i][z].draw();
        }

    }
}
