import Game from "./src/game.js";
import View from "./src/view.js";

const root = document.querySelector("#root");

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyA":
      game.movePieceLeft();
      view.render(game.getState());
      break;
    case "Space":
      game.rotatePiece();
      view.render(game.getState());
      break;
    case "KeyD":
      game.movePieceRight();
      view.render(game.getState());

      break;
    case "KeyS":
      game.movePieceDown();
      view.render(game.getState());

      break;
  }
});
