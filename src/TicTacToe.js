import { useState } from 'react';
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export function TicTacToe() {
 const [board, setBoard] = useState([null, null, null,
  null, null, null, null, null, null]);

 const decideWinner = (board) => {
  const lines = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 4, 8],
   [2, 4, 6],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8]
  ];
  for (let i = 0; i < lines.length; i++) {
   const [a, b, c] = lines[i];
   if (board[a] !== null && board[a] === board[b] && board[b] === board[c])
    return board[a];
  }
  return null;
 };
 //Declaring winner variable
 const winner = decideWinner(board);

 const [isXTurn, setIsXTurn] = useState(true);

 const handleClick = (id) => {
  if (winner === null && !board[id]) {
   const boardCopy = [...board];
   boardCopy[id] = isXTurn ? "X" : "O";
   setBoard(boardCopy);
   setIsXTurn(!isXTurn);
  }
 };
 function Box({ onPlayerClick, val }) {
  //const [val, setVal] = useState(null);
  return (<div className="gamebox"
   onClick={onPlayerClick} style={{ color: val === "X" ? "green" : "red" }}>{val}</div>
  );
 }

 const { width, height } = useWindowSize();
 return (
  <div class="full-game">
   {winner ? <Confetti
    width={width}
    height={height} gravity={0.05}
   /> : ""}
   <div className="board">
    {board.map((val, index) => <Box val={val} onPlayerClick={() => handleClick(index)} />)}
   </div>
   {winner ? <h2 className="winner"
    style={{ color: winner === "X" ? "green" : "red" }}>🏆 WINNER IS: {winner}</h2> : ""}
  </div>

 );
}
