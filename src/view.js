export default class View {
  static colors = {
    1: "#fafa69",
    2: "#ff852e",
    3: "#ff3636",
    4: "#72ff67",
    5: "#00ffc7",
    6: "#ff3c80",
    7: "#9753ff",
  };

  constructor(element, width, height, rows, columns) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");

    // this.playfieldBorderWidth = 4;
    // this.playfieldX = this.playfieldBorderWidth;
    // this.playfieldY = this.playfieldBorderWidth;
    // this.playfieldWidth = this.width * 2 / 3;
    // this.playfieldHeight = this.height;
    // this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2;
    // this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2;
    //
    this.blockWidth = this.width / columns;
    this.blockHeight = this.height / rows;
    //
    // this.panelX = this.playfieldWidth + 10;
    // this.panelY = 0;
    // this.panelWidth = this.width / 3;
    // this.panelHeight = this.height;

    this.element.appendChild(this.canvas);
  }

  render({ playfield }) {
    this.clearScreen();
    this.renderPlayfield(playfield);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  renderPlayfield(playfield) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

        if (block) {
          this.renderBlock(
            x * this.blockWidth,
            y * this.blockHeight,
            this.blockWidth,
            this.blockHeight,
            View.colors[block]
          );
        }
      }
    }
  }

  renderBlock(x, y, width, height, color) {
    this.context.fillStyle = color;
    this.context.strokeStyle = "#171717";
    this.context.lineWidth = 2;

    this.context.fillRect(x, y, width, height);
    this.context.strokeRect(x, y, width, height);
  }
}
