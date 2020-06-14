export default class Canvas {
    #canvas;
    #contents = [];

    #create = (element) => {
        const canvas = document.createElement("canvas");
        canvas.id = "TicTacToe";
        canvas.style = "background-color:#3e3e3e";
        element.appendChild(canvas);
        this.#canvas = canvas;
    }

    #setResponsiveness = (element) => {
        let timeOutFunctionId;
        new ResizeObserver(() => {
            clearTimeout(timeOutFunctionId);
            timeOutFunctionId = setTimeout(
                this.#onResize(element.offsetWidth, element.offsetHeight),
                300
            );
        }).observe(element);
    }

    #onResize = (elementWidth, elementHeight) => {
        if (elementWidth > maxSize && elementHeight > maxSize)
            this.#resize(maxSize);
        else
            if (elementHeight > elementWidth)
                this.#resize(elementWidth);
            else
                this.#resize(elementHeight);
    }

    #resize = (value) => {
        this.#canvas.width = value;
        this.#canvas.height = value;

        this.#resizeContents(value);
    }

    #resizeContents = (value) => {
        for (const content in this.#contents) {
            content.resize(value);
        }
    }

    #setContents = (contents) => {
        this.#contents = [];
        for (const content in contents)
            this.#contents.push(content);
    }

    constructor(element, contents) {
        this.#create(element);
        this.#setContents(contents);
        this.#setResponsiveness(element);
    }
}
