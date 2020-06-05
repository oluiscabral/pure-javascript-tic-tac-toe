export default class Canvas {
    constructor(element, maxSize) {
        // Properties //
        const canvas = create();

        // Objects //

        // Getters and setters //
        Object.defineProperty(this, 'context', {
            get: () => canvas.getContext("2d")
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
        }

        // Set canvas dimensions and responsiveness
        new ResizeObserver(() => { resize(element.offsetWidth, element.offsetHeight) }).observe(element);
    }
}
