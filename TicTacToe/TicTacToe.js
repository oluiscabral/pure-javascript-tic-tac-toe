import Canvas from "./Canvas/Canvas.js";
import Board from "./Canvas/Board/Board.js";
import setResponsiveness from './Features/Responsiveness.js';

export default class TicTacToe {
    constructor(element, maxSize) {
        // Contents //
        const board = new Board();

        // Canvas initialization //
        const canvas = new Canvas(element);
        const context = canvas.getContext("2d");


        setResponsiveness(canvas, { board })

    }
}
