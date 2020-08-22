import DefaultConfig from './DefaultConfig.js';
import DrawingUtils from './DrawingUtils.js';
import Board from './Board/Board.js';
import DisplayManager from './DisplayManager.js'


export default class Game extends DisplayManager {
    // Properties //
    #canvasConfig = {};
    #gameConfig = {};
    #canvas;
    #context;
    #initialized = false;

    // Public methods //
    initialize() {
        if (!this.#initialized) {
            const {
                grid_size,
                min_streak,
                allow_squares,
                min_square_size,
                power_ups,
                disabled_power_ups,
                players,
                bots
            } = this.#gameConfig;

            const {
                element,
                name,
                id,
                background_color,
                width,
                height,
                max_width,
                max_height,
                min_width,
                min_height
            } = this.#canvasConfig;
            const childCanvas = document.createElement('canvas');
            childCanvas.name = name;
            childCanvas.id = id;
            childCanvas.style = "background-color: " + background_color;
            element.appendChild(childCanvas);

            let canvas;
            for (let child of element.childNodes) {
                if (child.nodeName == 'CANVAS' && child.name == name && child.id == id) {
                    canvas = child;
                }
            }

            if (canvas == undefined) {
                throw console.log("Error getting the created game canvas")
            }

            // Defining variables //
            this.#canvas = canvas;
            this.#context = this.#canvas.getContext("2d");
            this.#drawingUtils = new DrawingUtils(this.#context);

            // Features //
            (() => {
                if (width == undefined && height == undefined) {
                    let timeOut;
                    new ResizeObserver(((elementWidth, elementHeight) => {
                        (() => {
                            if (width == undefined) {
                                if (max_width <= elementWidth) {
                                    this.#width = max_width;
                                } else if (min_width <= elementWidth) {
                                    this.#width = elementWidth;
                                } else {
                                    this.#width = min_width;
                                }
                            } else {
                                this.#width = width;
                            }

                            if (height == undefined) {
                                if (max_height <= elementHeight) {
                                    this.#height = max_height;
                                } else if (min_height <= elementHeight) {
                                    this.#height = elementHeight;
                                } else {
                                    this.#height = min_height
                                }
                            } else {
                                this.#height = height;
                            }
                        })();
                        this.#onResize(this.#width, this.#height);
                    })(element.offsetWidth, element.offsetHeight)).observe(element);
                } else {
                    this.#width = width;
                    this.#height = height;
                }
            })();

            //Displays
            this.#addDisplay(
                {
                    name: 'principal',
                    x: 0,
                    y: 0,
                    width: this.#width,
                    height: this.#height,
                    boxes: [
                        {
                            x: 0,
                            y: 0,
                            w: 100, //(1)
                            h: 90, //(2)
                            object: new Board(grid_size)
                        },
                        {
                            x: 0,
                            y: 90,
                            w: 100, //(1)
                            h: 10, //(2)
                            object: new InfoPanel(players, bots)
                        }
                    ]
                    // (1) w means width percentage in parent (this) width
                    // (2) h means height percentage in parent (this) height
                }
            );
            this.#initialized = true;
        } else {
            throw console.error("Canvas already initialized");
        }
    }

    constructor(canvasConfig, gameConfig) {
        super();
        // Config options transcription to global var //
        (() => {
            if (canvasConfig != undefined && Object.keys(canvasConfig).length != 0) {
                Object.keys(DefaultConfig.canvas).forEach((key) => {
                    if (canvasConfig.hasOwnProperty(key)) {
                        this.#canvasConfig[key] = canvasConfig[key];
                    } else {
                        this.#canvasConfig[key] = DefaultConfig.canvas[key];
                    }
                });
            } else {
                throw console.error("At least the element has to be defined!");
            }

            if (gameConfig != undefined && Object.keys(gameConfig).length != 0) {
                Object.keys(DefaultConfig.game).forEach((key) => {
                    if (gameConfig.hasOwnProperty(key)) {
                        this.#gameConfig[key] = gameConfig[key];
                    } else {
                        this.#gameConfig[key] = DefaultConfig.game[key];
                    }
                });
            } else {
                this.#gameConfig = DefaultConfig.game;
            }
        })();
        this.initialize();
    }
}
