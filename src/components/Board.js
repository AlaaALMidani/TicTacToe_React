import React, { Component } from "react";
import { Logic, Game } from "./game.mjs";
import Cell from "./cell";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(),
      player: 'X',
    };
    this.onClick = this.onClick.bind(this)
  }

  onClick = (index) => {
    console.log(index);
    console.log(this.state.game)
    this.setState({ game: Logic.addPlay(this.state.game, 'X', index) });
  }
  render() {
    return (
      <div className="h-1/2 w-1/3 margin-auto bg-indigo-900 rounded-3xl flex justify-center gap-0 bg-opacity-45">
        <div className="flex flex-wrap w-100 h-80 mt-6">
          {
            this.state.game.board.map((cell, i) => {
              return (
                <Cell
                  ind={i}
                  value={cell}
                  onClick={this.onClick}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Board; 
