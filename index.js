class TicTacToe {
    // initialize a canvas based on a given element
    constructor(element) {
        // initialize canvas
        const canvas = this.#initializeCanvas(element);
        const context = canvas.getContext('2d');
        const gridSize = 500 / 3;
        // draw board lines
        this.#drawBoard(canvas, context, gridSize);
        // create square units
        const squares = this.#createSquares(gridSize);
        // set canvas mouseMove event
        canvas.onmousemove = (mouse) => {
            squares.map(square => {
                if (square.mouseMove(mouse.offsetX, mouse.offsetY))
                    return true;
            });
        }

        canvas.onmouseout = (e) => {
            squares.map(square => {
                if (square.mouseLeave())
                    return true;
            })
        }

        canvas.onclick = (mouse) => {
            squares.map(square => {
                if (square.mouseClick(context))
                    return true;
            })
        }
    }

    #createSquares(gridSize) {
        const squares = new Array(9);

        let gridRow = 0;
        let gridCol = 0;
        for (let pos = 0; pos < 9; pos++) {
            squares[pos] = new Square(gridRow, gridCol, gridSize);
            gridCol++;
            if (gridCol == 3) {
                gridCol = 0;
                gridRow++;
            }
        }
        return squares;
    }

    #drawBoard(canvas, context, gridSize) {
        const canvasSize = canvas.width;
        context.fillStyle = '#FFFFFF';
        context.strokeStyle = '#FFFFFF';
        context.lineWidth = 5;
        // draw 2 vertical lines spaced equally
        context.moveTo(gridSize, 0);
        context.lineTo(gridSize, canvasSize);
        context.stroke();
        context.moveTo(gridSize * 2, 0);
        context.lineTo(gridSize * 2, canvasSize);
        context.stroke();
        // draw 2 horizontal lines spaced equally
        context.moveTo(0, gridSize);
        context.lineTo(canvasSize, gridSize);
        context.stroke();
        context.moveTo(0, gridSize * 2);
        context.lineTo(canvasSize, gridSize * 2);
        context.stroke();
    }

    #initializeCanvas(element) {
        // create canvas
        const canvas = document.createElement('canvas');
        // set all it's attributes
        canvas.id = 'TicTacToe';
        canvas.style = 'background-color:#3e3e3e';
        canvas.width = 500;
        canvas.height = 500;
        // append canvas to the element
        element.appendChild(canvas);
        return canvas;
    }
}

class Square {
    #row;
    #col;
    #size;
    #x;
    #y;
    #fillX;
    #fillY;
    #mouseOver = false;
    #used = false;

    draw() {
        console.log(this.#row, this.#col, this.#size);
    }

    mouseMove(mouseX, mouseY) {
        if (mouseX >= this.#x && mouseX <= this.#fillX && mouseY >= this.#y && mouseY <= this.#fillY) {
            if (!this.#mouseOver) {
                console.log("Mouse is over row: ", this.#row, " and col: ", this.#col);
                this.#mouseOver = true;
            }
            return true;
        } else {
            if (this.#mouseOver) {
                console.log("Mouse leaves row: ", this.#row, " and col: ", this.#col);
                this.#mouseOver = false;
            }
            return false;
        }
    }

    mouseLeave() {
        if (this.#mouseOver) {
            console.log("Mouse leaves row: ", this.#row, " and col: ", this.#col);
            this.#mouseOver = false;
            return true;
        }
        return false;
    }

    mouseClick(context) {
        if (this.#mouseOver && !this.#used) {
            // draw something on this square
            context.moveTo(this.#x, this.#y);
            context.lineTo(this.#fillX, this.#fillY);
            context.stroke();
            context.moveTo(this.#fillX, this.#y);
            context.lineTo(this.#x, this.#fillY);
            context.stroke();
            return true;
        }
        return false;
    }

    constructor(gridRow, gridCol, gridSize) {
        this.#row = gridRow;
        this.#col = gridCol;
        this.#size = gridSize;

        this.#x = this.#col * this.#size;
        this.#y = this.#row * this.#size;

        this.#fillX = this.#x + this.#size;
        this.#fillY = this.#y + this.#size;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe(document.body);
});
