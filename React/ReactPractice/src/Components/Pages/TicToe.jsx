import React, { useState } from "react";

const TicToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const winInfo = calculateWinner(board);
  const winner = winInfo ? winInfo.winner : null
  

  function calculateWinner(arrIndex) {
     const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        arrIndex[a] &&
        arrIndex[a] === arrIndex[b] &&
        arrIndex[a] === arrIndex[c]
      ) {
        return { winner: arrIndex[a], line: lines[i] };
      }
    }
    return null;
  } 

  const childCss = {
    height: "80px",
    width: "80px",
    border: "2px solid orange",
    borderRadius: "18px"
    // margin:"5px",
  };

  function handleClick(index) {
    if (board[index] || winner) return;

    // const board = [...board];
    // board[index] = next ? "X" : "O";
    // setBoard(board);
    const newBoard = [...board];
    newBoard[index] = next ? "X" : "O";
    setBoard(newBoard);
    setNext(!next);
  }
   
  function reset(){
    setBoard(Array(9).fill(null))
    next(true)
  }

  return (
    <>
    <div className="container d-flex flex-column align-items-center">
      <h2>Tic-Tac-Toe</h2>
      {winner ? <h4 className="text-success bg-warning px-5 py-1">Winner : {winner}</h4> : null}
      <h4>{`Player : ${next ? "x" : "0"} Turn`}</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "10px",
        }}
      >
        {board.map((value, index) => {
          return (
            <button style={childCss} onClick={() => handleClick(index)}>
              {value}
            </button>
          );
        })}
      </div>
      
      <button 
      onClick={reset}
      className="btn btn-outline-success mt-3">Reset Game</button>
      </div>
    </>
  );
};

export default TicToe;
