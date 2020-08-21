import Marker from './Marker/Marker.js';

export default class Square {
    // Properties //
    #size;
    #x;
    #y;
    #fillX;
    #fillY;
    #mouseOver = false;
    #marked = false;
    #marker = null;
    #row;
    #col;

    // Public methods //
    resize(value) {
        this.#size = value;
        this.#updatePosition();
    }

    draw() {
        if (this.#marked)
            console.log(this.#row + 1, this.#col + 1, this.#size);
    }

    // mouseMove(mouseX, mouseY, context, boardLineWidth) {
    //     if (checkMouseOver(mouseX, mouseY)) {
    //         if (!mouseOver) {
    //             console.log("Marker animation")
    //             mouseOver = true;
    //         }
    //     } else if (mouseOver) {
    //         console.log("End marker animation");

    //         mouseOver = false;
    //     }
    // }

    // mouseOut(context, boardLineWidth) {
    //     if (mouseOver) {
    //         console.log("End marker animation");
    //         mouseOver = false;
    //         return true;
    //     }
    //     return false;
    // }

    // mouseClick(mouseX, mouseY, context, boardLineWidth) {
    //     if (checkMouseOver(mouseX, mouseY)) {
    //         Marker.mark(x + boardLineWidth / 2, y + boardLineWidth / 2, context);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // Private methods //
    #updatePosition = () => {
        this.#x = this.#col * this.#size;
        this.#y = this.#row * this.#size;

        this.#fillX = this.#x + this.#size;
        this.#fillY = this.#y + this.#size;
    }

    #checkMouseOver = (mouseX, mouseY) => {
        if (mouseX >= this.#x && mouseX < fillX && mouseY >= this.#y && mouseY < fillY)
            return true;
        else
            return false;
    }

    #fillRect = (context, boardLineWidth) => {
        context.fillRect(this.#x + boardLineWidth / 2, this.#y + boardLineWidth / 2, this.#size - boardLineWidth, this.#size - boardLineWidth);
    }

    #clearRect = (context, boardLineWidth) => {
        context.clearRect(this.#x + boardLineWidth / 2, this.#y + boardLineWidth / 2, this.#size - boardLineWidth, this.#size - boardLineWidth);
    }
    constructor(row, col) {
        this.#row = row;
        this.#col = col;
    }
}
