export default class TicTacToe {
    #designConfig;
    #gameConfig;
    #canvas = new Canvas();

    initialize() {
        try {
            const menu = new Menu();
            const board = new Board(gameConfig);
            const infoPanel = new InfoPanel();

            const mouseEvents = new MouseEvents();

            this.#canvas.addResizeObserver(menu.resize);
            this.#canvas.addResizeObserver(board.resize);
            this.#canvas.addResizeObserver(infoPanel.resize);
            this.#canvas.addResizeObserver(mouseEvents.resize);

            this.#canvas.initialize(designConfig);


        } catch (error) {
            console.error(error);
        }
    }

    constructor(designConfig, gameConfig) {
        this.#designConfig = designConfig;
        this.#gameConfig = gameConfig;
    }
}
