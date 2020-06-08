export default class Player {
    constructor(config) {
        const {
            marker
        } = config;

        const moveRow = [];
        const moveCol = [];

        Object.defineProperty(this, 'marker', {
            get: () => marker,
        });

        this.insertMove = (position) => {
            moveRow.push(position[0]);
            moveCol.push(position[1]);
        }

        this.check
    }
}
