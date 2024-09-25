/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Logic, Game } from "./game.mjs";
import Cell from "./cell";
import Restart from "./../restart.svg";

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
    console.log(this.state.game)
    console.log(index);
    this.setState({ game: Logic.addPlay(this.state.game, this.state.player, index) });

    if (this.state.player === 'X') {
      this.setState({ player: 'O' })

    } else {
      this.setState({ player: 'X' })
    }
  }
  onRestart() {
    this.setState({ game: new Game(), player: 'X' });
    console.log('restart')
  }
  render() {
    return (
      <div className="h-1/2 w-1/3 margin-auto bg-indigo-900 rounded-3xl flex flex-col  justify-center items-center   gap-0 bg-opacity-45">

        <div className="flex flex-wrap w-100 h-80 mt-6">
          {
            this.state.game.board.map((cell, i) => {
              return (
                <Cell
                  ind={i}
                  value={cell}
                  click={this.onClick}
                />
              );
            })}
        </div>
        <div onClick={() => this.onRestart()}>
          < img src={Restart} className="w-24 h-24 m-auto mt-32" />
        </div>

      </div>
    );
  }
}

export default Board; 
