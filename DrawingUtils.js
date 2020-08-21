export default class DrawingUtils {
    #context;
    defaultLineColor = '#FFFFFF';
    defaultLineWidth = 10;
    #lineColor = '#FFFFFF';
    #lineWidth = 10;

    drawLine(start, end) {
        if (start.x != undefined && start.y != undefined && end.x != undefined && end.y != undefined) {
            this.#initializeLine();
            this.#context.beginPath();
            this.#context.moveTo(start.x, start.y);
            this.#context.lineTo(end.x, end.y);
            this.#context.stroke();
            this.#context.closePath();
        } else {
            console.error("Wrong parameters!");
        }
    }

    drawMultipleLines(start, end, interval, amount) {
        if (start.x != undefined && start.y != undefined && end.x != undefined && end.y != undefined && (interval.x != undefined || interval.y != undefined) && amount != undefined) {
            if (interval.x == undefined) {
                xInterval = 0;
            } else if (interval.y == undefined) {
                yInterval = 0;
            }
            this.#initializeLine();
            for (let i = 0; i < amount; i++) {
                const xInterval = i * interval.x;
                const yInterval = i * interval.y;
                this.#context.beginPath();
                this.#context.moveTo(start.x + xInterval, start.y + yInterval);
                this.#context.lineTo(end.x + xInterval, end.y + yInterval);
                this.#context.stroke();
                this.#context.closePath();
            }
        } else {
            console.error("Wrong parameters!");
        }
    }

    drawHorizontalLine(start, length) {
        if (start.x != undefined && start.y != undefined && length != undefined) {
            this.#initializeLine();
            this.#context.beginPath();
            this.#context.moveTo(start.x, start.y);
            this.#context.lineTo(start.x + length, start.y);
            this.#context.stroke();
        } else {
            console.error("Wrong parameters!");
        }
    }

    drawMultipleHorizontalLines(start, length, yInterval, amount) {
        if (start.x != undefined && start.y != undefined && length != undefined && yInterval != undefined && amount != undefined) {
            this.#initializeLine();
            for (let i = 0; i < amount; i++) {
                this.#context.beginPath();
                this.#context.moveTo(start.x, start.y + yInterval * i);
                this.#context.lineTo(start.x + length, start.y + yInterval * i);
                this.#context.stroke();
            }
        } else {
            console.error("Wrong parameters!");
        }
    }

    drawVerticalLine(start, length) {
        if (start.x != undefined && start.y != undefined && length != undefined) {
            this.#initializeLine();
            this.#context.beginPath();
            this.#context.moveTo(start.x, start.y);
            this.#context.lineTo(start.x, start.y + length);
            this.#context.stroke();
        } else {
            console.error("Wrong parameters!");
        }
    }

    drawMultipleVerticalLines(start, length, xInterval, amount) {
        if (start.x != undefined && start.y != undefined && length != undefined && xInterval != undefined && amount != undefined) {
            this.#initializeLine();
            for (let i = 0; i < amount; i++) {
                this.#context.beginPath();
                this.#context.moveTo(start.x + xInterval * i, start.y);
                this.#context.lineTo(start.x + xInterval * i, start.y + length);
                this.#context.stroke();
                this.#context.closePath();
            }
        } else {
            console.error("Wrong parameters!");
        }
    }

    setLineColor(color) {
        this.#lineColor = color;
    }

    setLineWidth(width) {
        this.#lineWidth = width;
    }

    setLineStyle(color, width) {
        this.#lineColor = color;
        this.#lineWidth = width;
    }

    #initializeLine = () => {
        if (this.#lineColor != null) {
            this.#context.strokeStyle = this.#lineColor;
            this.#lineColor = null;
        } else {
            this.#context.strokeStyle = this.defaultLineColor;
        }
        if (this.#lineWidth != null) {
            this.#context.lineWidth = this.#lineWidth;
            this.#lineWidth = null;
        } else {
            this.#context.lineWidth = this.defaultLineWidth;
        }
    }

    constructor(context) {
        this.#context = context;
    }
}
