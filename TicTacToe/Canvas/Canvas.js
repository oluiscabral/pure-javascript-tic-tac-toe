import Board from './Board/Board.js';

export default class Canvas {
    constructor(element, maxSize) {
        // Properties //
        const canvas = create();

        // Contents //
        const board = new Board();

        // Getters and setters //
        Object.defineProperty(this, 'board', {
            get: () => board,
        });

        // Private methods //
        function create() {
            const canvas = document.createElement("canvas");
            canvas.id = "TicTacToe";
            canvas.style = "background-color:#3e3e3e";
            element.appendChild(canvas);
            return canvas;
        }

        function resize(elementWidth, elementHeight) {
            if (elementWidth > maxSize && elementHeight > maxSize)
                setSize(maxSize);
            else
                if (elementHeight > elementWidth)
                    setSize(elementWidth);
                else
                    setSize(elementHeight);
        }

        function setSize(value) {
            canvas.width = value;
            canvas.height = value;

            resizeContents(value);
        }

        function resizeContents(value) {
            board.resize(value);
        }

        // Set canvas dimensions and responsiveness
        new ResizeObserver(() => { resize(element.offsetWidth, element.offsetHeight) }).observe(element);
    }
}
