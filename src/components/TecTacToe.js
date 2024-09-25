import React from "react";
import Board from "./Board.js";

const TecTacToe = () => {
  return (
    <div className="bg-indigo-950 w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-amber-500 top-10 absolute text-9xl bold">Tic Tac Toe</h1>
      <Board />
    
    </div>
  );
};

export default TecTacToe;
