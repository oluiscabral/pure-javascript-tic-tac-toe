class Events {

  static addResizer(htmlElement, observer) {
    new ResizeObserver(((elementWidth, elementHeight) => {
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
    })(htmlElement.offsetWidth, htmlElement.offsetHeight), htmlElement);
  }
}
