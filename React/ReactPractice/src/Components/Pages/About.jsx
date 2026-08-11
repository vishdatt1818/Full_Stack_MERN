
import React, { useState } from 'react';

const About = () => {

  // Helper function to evaluate board state and return winning info
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;  
}

// export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winInfo = calculateWinner(board);
  const winner = winInfo ? winInfo.winner : null;
  const winningLine = winInfo ? winInfo.line : [];
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index) => {
    // Ignore click if square is already filled or game is over
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  // Status message text
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

 
    



  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tic-Tac-Toe</h1>
      <div style={styles.status}>{status}</div>

      <div style={styles.board}>
        {board.map((value, index) => {
          const isWinningSquare = winningLine.includes(index);
          return (
            <button
              key={index}
              style={{
                ...styles.square,
                backgroundColor: isWinningSquare ? '#4CAF50' : '#fff',
                color: isWinningSquare ? '#fff' : '#333',
              }}
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          );
        })}
      </div>

      <button style={styles.resetButton} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

// Basic Inline Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  status: {
    fontSize: '1.25rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 80px)',
    gridGap: '8px',
  },
  square: {
    width: '80px',
    height: '80px',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '2px solid #333',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
  },
  resetButton: {
    marginTop: '25px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


export default About


 {/* <div className='parent' style={{display:"flex"}}>
        <div onClick={func}  id='child1' className="child" style={childCss}></div>
        <div onClick={func} id='child2' className="child" style={childCss}></div>
        <div onClick={func} id='child3' className="child" style={childCss}></div>
    </div>
    <div className='parent' style={{display:"flex"}}>
        <div onClick={func} id='child4' className="child" style={childCss}></div>
        <div onClick={func} id='child5' className="child" style={childCss}></div>
        <div onClick={func} id='child6' className="child" style={childCss}></div>
    </div>
    <div className='parent' style={{display:"flex"}}>
        <div onClick={func} id='child7' className="child" style={childCss}></div>
        <div onClick={func} id='child8' className="child" style={childCss}></div>
        <div onClick={func} id='child9' className="child" style={childCss}></div>
    </div>
    <button>X</button>
    <button>0</button> */}