export default class Controller {
  constructor(game, view) {
    this.game = game;
    this.view = view;
    // this._isPlaying = false;
    // this._interval = null;
    //
    // this.update = this.update.bind(this);
    //
    // view.on('keypress', this._handleKeyPress.bind(this));
    // view.on('keydown', this._handleKeyDown.bind(this));
    // view.on('keyup', this._handleKeyUp.bind(this));

    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    this.view.renderStartScreen();
  }

  handleKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.view.renderMainScreen(this.game.getState())
        break;
      case "KeyA":
        this.game.movePieceLeft();
        this.view.renderMainScreen(this.game.getState());
        break;
      case "Space":
        this.game.rotatePiece();
        this.view.renderMainScreen(this.game.getState());
        break;
      case "KeyD":
        this.game.movePieceRight();
        this.view.renderMainScreen(this.game.getState());

        break;
      case "KeyS":
        this.game.movePieceDown();
        this.view.renderMainScreen(this.game.getState());

        break;
    }
  }
}
