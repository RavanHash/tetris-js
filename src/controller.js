export default class Controller {
  constructor(game, view) {
    this.game = game;
    this.view = view;
    this.intervalId = null;
    this.isPlaying = false;

    this.intervalId = setInterval(() => {
      this.update();
    }, 1000);

    // view.on('keypress', this._handleKeyPress.bind(this));
    // view.on('keydown', this._handleKeyDown.bind(this));
    // view.on('keyup', this._handleKeyUp.bind(this));

    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    this.view.renderStartScreen();
  }

  update() {
    this.game.movePieceDown();
    this.updateView();
  }

  play() {
    this.isPlaying = true;
    this.startTimer();
    this.updateView();
  }

  pause() {
    this.isPlaying = false;
    this.stopTimer();
    this.updateView();
  }

  updateView() {
    this.view.renderMainScreen(this.game.getState());

    // const state = this.game.state;
    //
    // if (state.isGameOver) {
    //     this.view.renderEndScreen(state);
    // } else 
      if (!this.isPlaying) {
        this.view.renderPauseScreen();
      } else {
        this.view.renderMainScreen(this.game.getState());
      }
  }

  startTimer() {
    const speed = 1000 - this.game.getState().level * 100;

    if (!this.intervalId) {
      this.intervalId = setInterval(
        () => {
          this.update();
        },
        speed > 0 ? speed : 100
      );
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  handleKeyDown(event) {
    switch (event.code) {
      case "Enter":
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
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
