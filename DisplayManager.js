class DisplayManager {
  #displays;
  constructor(game, displays) {
    game.addObserver(this);

    this.#displays = displays;
  }


}
