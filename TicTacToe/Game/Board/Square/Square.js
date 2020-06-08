import Marker from './Marker/Marker.js';

export default class Square {
    constructor(row, col) {
        // Properties //
        let size;
        let x;
        let y;
        let fillX;
        let fillY;
        let mouseOver = false;
        let marker = null;

        // Public methods //
        this.info = () => {
            console.log("x:" + x + " fillX:" + fillX + " y:" + y + " fillY:" + fillY);
        }

        this.update = (gridSize) => {
            size = gridSize;
            updatePosition();
        }

        this.draw = () => {
            console.log(row, col, size);
        }

        this.mouseMove = (mouseX, mouseY, context, boardLineWidth) => {
            if (checkMouseOver(mouseX, mouseY)) {
                if (!mouseOver) {
                    console.log("Marker animation")
                    mouseOver = true;
                }
            } else if (mouseOver) {
                console.log("End marker animation");

                mouseOver = false;
            }
        }

        this.mouseOut = (context, boardLineWidth) => {
            if (mouseOver) {
                console.log("End marker animation");
                mouseOver = false;
                return true;
            }
            return false;
        }

        this.mouseClick = (mouseX, mouseY, context, boardLineWidth) => {
            if (checkMouseOver(mouseX, mouseY)) {
                Marker.mark(x + boardLineWidth / 2, y + boardLineWidth / 2, context);
                return true;
            } else {
                return false;
            }


        }

        // Private methods //
        function updatePosition() {
            x = col * size;
            y = row * size;

            fillX = x + size;
            fillY = y + size;
        }

        function checkMouseOver(mouseX, mouseY) {
            if (mouseX >= x && mouseX < fillX && mouseY >= y && mouseY < fillY)
                return true;
            else
                return false;
        }

        function fillRect(context, boardLineWidth) {
            context.fillRect(x + boardLineWidth / 2, y + boardLineWidth / 2, size - boardLineWidth, size - boardLineWidth);
        }

        function clearRect(context, boardLineWidth) {
            context.clearRect(x + boardLineWidth / 2, y + boardLineWidth / 2, size - boardLineWidth, size - boardLineWidth);
        }

    }
}
