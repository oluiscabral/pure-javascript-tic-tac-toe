// Contents //
import Board from './Contents/Board/Board.js';

// Features //
import Responsiveness from './Features/Responsiveness/Responsiveness.js';

export default class TicTacToe {
    constructor(designConfig, playersConfig) {
        // Game element container initializer //
        const {
            element
        } = designConfig;

        // Canvas initializer //
        const canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.style = "background-color:#3e3e3e";
        element.appendChild(canvas);

        // Contents //
        const contents = {
            board: new Board(minStreak, playersConfig),
        };


        // Features //
        new Responsiveness(element, canvas, designConfig.maxSize, contents); // All contents must have a public 'resize' method and be in the property's object
    }
}
