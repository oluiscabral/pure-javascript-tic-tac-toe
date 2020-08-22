class Display {
    #drawingUtils;
    #active = false;
    #name;
    #x;
    #y;
    #width;
    #height;
    #boxes = [];

    constructor(drawingUtils, name, x, y, width, height, boxes) {
        this.#drawingUtils = drawingUtils;
        this.#name = name;
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        boxes.forEach(boxObject => {
            const {
                x,
                y,
                w,
                h,
                object
            } = boxObject;
            this.#boxes.push(new DisplayBox(x, y, w, h, object));
        });
    }

    resize(width, height) {
        this.#width = width - this.#x;
        this.#height = height - this.#y;

        this.#boxes.forEach(box => {
            box.resize(this.#width, this.#height);
        });

        if (this.#active) {
            this.draw()
        }
    }

    draw() {
        this.#boxes.forEach(box => {
            box.draw(this.#drawingUtils);
        })
    }
}
