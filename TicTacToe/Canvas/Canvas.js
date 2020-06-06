export default class Canvas {
    constructor(element) {
        // Properties //
        const canvas = create();

        // Getters and setters //
        Object.defineProperty(this, 'size', {
            get: () => canvas.width,
            set: (value) => {
                canvas.width = value;
                canvas.height = value;
            }
        });

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
