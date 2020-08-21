import DefaultConfig from './DefaultConfig.js';
import DrawingUtils from "./DrawingUtils.js";
import Board from "./Board/Board.js";


export default class Game {
    // Properties //
    #canvasConfig = {};
    #gameConfig = {};
    #observers = [];
    #canvas;
    #context;
    #initialized = false;
    #displayManager;

    #events = {
        mouseClick: this.#canvas.onclick,
        mouseMove: this.#canvas.on
    }

    get addObserver() {
        return this.#addObserver;
    }

    get context() {
        return this.#context;
    }

    get #width() {
        return this.#canvas.width;
    }

    set #width(value) {
        this.#canvas.width = value;
    }

    get #height() {
        return this.#canvas.height;
    }

    set #height(value) {
        this.#canvas.height = value;
    }

    // Public methods //
    initialize() {
        if (!this.#initialized) {


            this.#initialized = true;
        } else {
            throw console.error("Canvas already initialized");
        }
    }


    // Private methods //
    #addObserver = (observer) => {
        this.#observers.push(observer);
    }

    #setResponsiveness = () => {
        if (this.#canvasConfig.width == undefined && this.#canvasConfig.height == undefined) {
            let timeOut;
            new ResizeObserver(() => {
                clearTimeout(timeOut);
                timeOut = setTimeout(() =>
                    this.#resize(this.#canvasConfig.element.offsetWidth, this.#canvasConfig.element.offsetHeight),
                    300
                );
            }).observe(this.#canvasConfig.element);
        } else {
            this.#width = this.#canvasConfig.width;
            this.#height = this.#canvasConfig.height;
        }
    }

    #resize = (elementWidth, elementHeight) => {
        await(() => {
            if (this.#canvasConfig.width == undefined) {
                if (this.#canvasConfig.max_width <= elementWidth) {
                    this.#width = this.#canvasConfig.max_width;
                } else if (this.#canvasConfig.min_width <= elementWidth) {
                    this.#width = elementWidth;
                } else {
                    this.#width = this.#canvasConfig.min_width;
                }
            } else {
                this.#width = this.#canvasConfig.width;
            }

            if (this.#canvasConfig.height == undefined) {
                if (this.#canvasConfig.max_height <= elementHeight) {
                    this.#height = this.#canvasConfig.max_height;
                } else if (this.#canvasConfig.min_height <= elementHeight) {
                    this.#height = elementHeight;
                } else {
                    this.#height = this.#canvasConfig.min_height;
                }
            } else {
                this.#height = this.#canvasConfig.height;
            }
        })()

        dis

    }

    constructor(canvasConfig, gameConfig) {
        // Config options transcription to global var //
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

        const {
            element,
            name,
            id,
            background_color
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
        this.#setResponsiveness();
        this.#setMouseEvents();

        // Displays //
        this.#displayManager = new DisplayManager(this, {
            'principal': new Display({
                'board': new Board(this),
                // 'infoPanel': new InfoPanel(this)
            })
        });
    }
}
