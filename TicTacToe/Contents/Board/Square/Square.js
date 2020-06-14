export default class Square {
    constructor() {
        let row;
        let col;
        let size;

        let x;
        let y;

        let fillX;
        let fillY;

        let mouseOver = false;

        this.update = (gridRow, gridCol, gridSize) => {
            row = gridRow;
            col = gridCol;
            size = gridSize;
            updatePos();
        }

        this.draw = () => {
            console.log(row, col, size);
        }

        this.checkMouseOver = (mouseX, mouseY) => {
            if (mouseX >= x && mouseX <= fillX && mouseY >= y && mouseY <= fillY) {
                if (!mouseOver) {
                    console.log("Mouse is over row: ", row, " and col: ", col);
                    mouseOver = true;
                }
                return true;
            } else {
                if (mouseOver) {
                    mouseOver = false;
                }
                return false;
            }
        }

        // Private methods //
        function updatePos() {
            x = col * size;
            y = row * size;

            fillX = x + size;
            fillY = y + size;
        }

        function checkMouseOver() {

        }
    }
}
