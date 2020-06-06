// Config object //
import config from "./config.js";

// Content classes //
import Board from './Board/Board.js';

(function TicTacToe({ element, maxSize } = config) {
    // Properties //
    const canvas = createCanvas();

    // Contents //
    const board = new Board();

    // Contents resizer //
    function resizeContents(value) {
        board.resize(value);
    }

    // Canvas creator //
    function createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.style = "background-color:#3e3e3e";
        element.appendChild(canvas);
        return canvas;
    }

    // Canvas responsiveness --
    new ResizeObserver(() => { resizeCanvas(element.offsetWidth, element.offsetHeight) }).observe(element);

    function resizeCanvas(elementWidth, elementHeight) {
        if (elementWidth > maxSize && elementHeight > maxSize)
            setCanvasSize(maxSize);
        else
            if (elementHeight > elementWidth)
                setCanvasSize(elementWidth);
            else
                setCanvasSize(elementHeight);
    }

    function setCanvasSize(value) {
        canvas.width = value;
        canvas.height = value;
        resizeContents(value);
    }
    // --
})();
