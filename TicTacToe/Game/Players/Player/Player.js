export default class Player {
    constructor(config) {
        const {
            marker
        } = config;

        Object.defineProperty(this, 'marker', {
            get: () => marker,
        });
    }
}
