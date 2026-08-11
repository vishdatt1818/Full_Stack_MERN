import React, { useState, useRef, useEffect } from "react";

const TicTacToe = () => {

  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const [player, setPlayer] = useState("X");

  const [winner, setWinner] = useState("");

  const boardRef = useRef(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleClick = (index) => {

    if (board[index] !== "" || winner !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = player;

    setBoard(newBoard);

    setPlayer(player === "X" ? "O" : "X");
  };

  useEffect(() => {

    for (let pattern of winningPatterns) {

      const [a, b, c] = pattern;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        setWinner(board[a]);
        return;
      }
    }

  }, [board]);

  const resetGame = () => {

    setBoard([
      "", "", "",
      "", "", "",
      "", "", ""
    ]);

    setPlayer("X");

    setWinner("");
  };

  return (
    <div>

      <h1>Tic Tac Toe</h1>

      <h2>Current Player: {player}</h2>

      <div ref={boardRef}>

        {board.map((value, index) => (

          <button
            key={index}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>

        ))}

      </div>

      {winner && (
        <h2>Winner: {winner}</h2>
      )}

      <button onClick={resetGame}>
        Reset Game
      </button>

    </div>
  );
};

export default TicTacToe;