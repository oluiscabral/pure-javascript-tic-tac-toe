class DisplayBox {
  #width;
  #height;
  #x;
  #y;
  #w;
  #h;
  #object;

  constructor(x, y, w, h, object) {
    this.#x = x;
    this.#y = y;
    this.#w = w;
    this.#h = h;
    this.#object = object;
  }

  resize(width, height) {
    this.#width = (width / this.#w) * 100;
    this.#height = (height / this.#h) * 100;
  }

  draw(drawingUtils) {
    this.#object.draw(drawingUtils);
  }
}
