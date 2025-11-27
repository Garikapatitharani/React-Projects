import React, { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (updatedBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
      [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[b] === updatedBoard[c]
      ) {
        return updatedBoard[a];
      }
    }

    if (!updatedBoard.includes(null)) return "Draw";

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);

    const winResult = checkWinner(updatedBoard);
    if (winResult) {
      setWinner(winResult);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial' }}>
      <h2>🎮 Tic Tac Toe</h2>

      {/* Player Info */}
      <div style={{ marginBottom: '15px' }}>
        <strong>Player 1: ❌ </strong> &nbsp;|&nbsp;
        <strong>Player 2: ⭕ </strong>
      </div>

      {/* Board */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        justifyContent: 'center',
        gap: '5px',
        margin: '20px auto'
      }}>
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              fontSize: '2em',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #444',
              cursor: value || winner ? 'not-allowed' : 'pointer',
              color: value === 'X' ? '#e63946' : '#1d3557'
            }}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Game Status */}
      <div style={{ marginTop: '20px' }}>
        {winner ? (
          <div>
            <h3>{winner === "Draw" ? "🤝 It's a Draw!" : `🎉 Winner: ${winner}`}</h3>
            <button onClick={resetGame} style={{
              marginTop: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              🔁 Play Again
            </button>
          </div>
        ) : (
          <h4>Current Turn: {isXTurn ? '❌ (X)' : '⭕ (O)'}</h4>
        )}
      </div>
    </div>
  );
}




