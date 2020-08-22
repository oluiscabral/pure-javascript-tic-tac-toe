import Display from './Display.js';

export default class DisplayManager {
  #width;
  #height;
  #drawingUtils;

  #activeDisplay = null;

  #displays = [
    //all display objects
    //display object
  ];

  #onResize(width, height) {
    this.#displays.forEach(display => {
      display.resize(width, height);
    });
  }

  #addDisplay(displayObject) {
    try {
      const {
        name,
        x,
        y,
        width,
        height,
        boxes
      } = displayObject;
      const display = new Display(this.#drawingUtils, name, x, y, width, height, boxes);
      this.#displays.push(display);
    } catch (e) {
      console.log(e);
    }
  }

  activate(name) {
    this.#displays.forEach(display => {
      if (display.name == name) {
        if (this.#activeDisplay != null) {
          this.#activeDisplay.active = false;
        }
        display.draw();
        this.#activeDisplay = display;
        this.#activeDisplay.active = true;
        return display;
      }
    });
    console.log("There's no display named: " + name);
    return null;
  }

  constructor() {

  }
}
