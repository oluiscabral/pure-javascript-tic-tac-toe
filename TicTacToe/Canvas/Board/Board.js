import Square from './Square/Square.js';

export default class Board {
    constructor() {
        // Properties //
        let squareUnit;

        // Objects //
        let square = createSquares();

        // Getters and Setters //

        // Public methods //

        this.update = () => {

        }

        // Private methods //
        function createSquares() {
            //const squareUnit = size / 3;
            // console.log(size);

            let s = new Array(3);
            s.fill(new Array(1));

            /*             for (let i = 0; i < 3; i++) {
                            for (let z = 0; z < 3; z++) {
                                s[i][z] = new Square(i * squareUnit, z * squareUnit, size);
                            }
                        } */
            return s;
        }

        this.draw = (size, context) => {
            for (let i = 0; i < 3; i++)
                for (let z = 0; z < 3; z++)
                    square[i][z].draw();
        }

    }
}

