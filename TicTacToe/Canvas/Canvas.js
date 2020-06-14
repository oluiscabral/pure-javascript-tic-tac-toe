export default class Canvas {
    constructor(element) {
        // Properties //
        const canvas = create();

        // Private methods //
        function create() {
            const canvas = document.createElement("canvas");
            canvas.id = "TicTacToe";
            canvas.style = "background-color:#3e3e3e";
            element.appendChild(canvas);
            return canvas;
        }
    }
}
