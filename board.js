class Board{
  constructor() {
    this.setupBoard();
  }

  drawBoard() {

  }

  checkWin() {

  }

  setupBoard() {
    this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
  }

  placeMark(row, col, mark) {
    if (this.grid[row][col] === '_') {
      this.grid[row][col] = mark;
      return true;
    } else {
      return false;
    }
  }

  game() {

  }
}

