class Canvas {
    // Properties //
    #resizeObservers = [];
    #config;
    #initialized = false;

    // Public methods //
    initialize() {
        if (!this.#initialized) {
            try {
                const {
                    element,
                    id,
                    style
                } = this.#config;
            } catch (error) {
                console.error(error);
            } finally {
                const canvas = document.createElement('canvas');
                canvas.id = id;
                canvas.style = style;
                element.appendChild(canvas);

                this.#setResponsiveness();

                this.#initialized = true;
            }
        } else
            throw console.error("Canvas already initialized");
    }

    addResizeObserver(resizeObserver) {
        this.#resizeObservers.push(resizeObserver);
    }

    // Private methods //
    #setResponsiveness = () => {
        let timeOut;
        new ResizeObserver(() => {
            clearTimeout(timeOut);
            timeOut = setTimeout(() =>
                this.#resize(this.#config.element.offsetWidth, this.#config.element.offsetHeight),
                300
            );
        }).observe(this.#config.element);
    }

    #resize = (elementWidth, elementHeight) => {
        if (elementWidth > this.#config.maxSize && elementHeight > this.#config.maxSize)
            this.#setSize(this.#config.maxSize);
        else
            if (elementHeight > elementWidth)
                this.#setSize(elementWidth);
            else
                this.#setSize(elementHeight);
    }

    #setSize = (value) => {
        this.#canvas.width = value;
        this.#canvas.height = value;

        this.#notifyObservers(value);
    }

    #notifyObservers = (value) => {
        for (let resizeObserver in this.#resizeObservers) {
            resizeObserver(value);
        }
    }
}
