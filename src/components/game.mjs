class Logic {


  static checkEndOfGame(game) {
    if (Logic.possibleMoves(game).length === 0) {
      console.log('erererere')
      return "Tied";
    }
    if (Logic.checkWinner(game)) {
      if (Logic.isOWon(game)) return "O Won";
      if (Logic.isXWon(game)) return "X Won";

    }
    return false
  }

  //////General checks
  static checkRows(game, char) {
    let yes;
    for (let i = 0; i < 3; i++) {
      yes = true;
      for (let j = 0; j < 3; j++) {
        if (game.board[ind(i, j)] !== char) yes = false;
      }
      if (yes) return true;
    }
    return false;
  }
  static checkColumns(game, char) {
    let yes;
    for (let i = 0; i < 3; i++) {
      yes = true;
      for (let j = 0; j < 3; j++) {
        if (game.board[ind(j, i)] !== char) yes = false;
      }
      if (yes) return true;
    }
    return false;
  }
  static checkDiameters(game, char) {
    let yes = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j) {
          if (game.board[ind(i, j)] !== char) yes = false;
        }
      }
    }
    if (yes) return true;

    yes = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 2 - j) {
          if (game.board[ind(i, j)] !== char) yes = false;
        }
      }
    }
    return yes;
  }

  //////Win state for two players
  static isXWon(game) {
    if (
      Logic.checkColumns(game, "X") ||
      Logic.checkRows(game, "X") ||
      Logic.checkDiameters(game, "X")
    )
      return true;
    return false;
  }
  static isOWon(game) {
    if (
      Logic.checkColumns(game, "O") ||
      Logic.checkRows(game, "O") ||
      Logic.checkDiameters(game, "O")
    )
      return true;
    return false;
  }

  /////check if there is a winner or not
  static checkWinner(game) {
    if (Logic.isOWon(game) || Logic.isXWon(game)) return true;
    return false;
  }
  ////possible moves
  static possibleMoves(game) {
    let moves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game.board[ind(i,j)] === "_") {
          moves.push({ line: i, column: j });
        }
      }
    }
    return moves;
  }

  static addPlay(game, player, ind) {
    if (ind < 0 || ind > 9) {
      return { game: game, message: "Invalid move!\nLine and column have to be between 0 and 2 inclusive" };
    }

    if (game.board[ind] !== "_") {
      return { game: game, message: "Invalid move!\nYou have to choose empty cell" };
    }
    let tempBoard = game.board;
    tempBoard[ind] = player;
    return {
      game: new Game(tempBoard), message: ""
    };
  }
  static play(game, player, ind) {

    const temp = Logic.addPlay(game, player, ind)
    const end = Logic.checkEndOfGame(temp.game);
    if (end) {
      return { game: undefined, message: end };
    }
    return temp
  }
}
class Game {
  constructor(board) {
    if (board === undefined) {
      this.board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
    } else {
      this.board = board;
    }
  }

  toString() {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        console.log(this.board[ind(i, j)]);
      }
  }

}
function ind(row, col) {
  return row * 3 + col;
}
// let game = new Game()
// Logic.addPlay(game, 'X', 0).toString()
// console.log('hhhhhh')
// Logic.addPlay(game, 'Y',8).toString()
// console.log(Logic.possibleMoves(game))

// console.log('newGame')
// let game1 = new Game(
//     [['X', '_', '_'],
//     ['_', 'X', '_'],
//     ['_', '_', 'X']])

// console.log(Logic.checkEndOfGame(game1))

// let game2 = new Game(
//     [['O', 'O', 'O'],
//     ['_', 'X', '_'],
//     ['_', '_', 'X']])
// console.log(Logic.checkEndOfGame(game2))

export { Logic, Game };
