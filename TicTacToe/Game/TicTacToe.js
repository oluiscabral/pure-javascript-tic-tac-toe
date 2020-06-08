// Contents //
import Board from './Contents/Board/Board.js';

// Features //
import Responsiveness from './Features/Responsiveness/Responsiveness.js';

export default class TicTacToe {
    constructor(designConfig) {
        this.#designSetup(designConfig);
    }

    #canvas;

    #designSetup = (config) => {
        const {
            element,
            maxSize
        } = config;

        canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.style = "background-color:#3e3e3e";
        element.appendChild(canvas);

        this.#canvas = canvas;

        new Responsiveness(element, canvas, maxSize);
    }
}
