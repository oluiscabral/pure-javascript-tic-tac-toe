export default class Square {
    constructor(x, y, size) {

        this.update = (value) => {
            size = value;
        }

        this.draw = () => {
            console.log("x: ", x, " y: ", y, " size: ", size);
        }

        Object.defineProperty(this, 'x', {
            get: () => x,
        });
    }
}
