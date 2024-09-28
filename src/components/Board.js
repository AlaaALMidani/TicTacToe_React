/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Logic, Game } from "./game.mjs";
import Cell from "./cell";
import Restart from "./../restart.svg";


function Board() {
  const [state, setState] = useState({
    game: new Game(),
    player: 'X'
  })

  const onClick = (index) => {

    console.log(state.game)
    const tempGame = Logic.play(state.game, state.player, index);

    if (tempGame.game) {
      setState({ game: tempGame.game, player: state.player });

      if (state.player === 'X') {
        setState({ game: state.game, player: 'O' })

      } else {
        setState({ game: state.game, player: 'X' })
      }
    }
    else { 
    console.log(tempGame.message)
      onRestart();
    } 

  }

  let onRestart = () => {
    setState({ game: new Game(), player: 'X' });
    console.log('restart')
  }

  return (
    <div className="h-1/2 w-1/3 margin-auto bg-indigo-900 rounded-3xl flex flex-col  justify-center items-center   gap-0 bg-opacity-45">

      <div className="flex flex-wrap w-100 h-80 mt-6">
        {
          state.game.board.map((cell, i) => {
            return (
              <Cell
                key={i}
                value={cell}
                onClick={() => onClick(i)}
              />
            );

          }
          )
        }
      </div>
      <div onClick={onRestart} className=" h-24   m-auto mt-32">
        < img src={Restart} className="w-24 h-24 " />
      </div>

    </div>
  );
}

export default Board; 
