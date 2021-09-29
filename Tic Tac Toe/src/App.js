import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './style/root.scss';

const App = () => {
  const [boardState, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setXNext] = useState(false);

  const winner = calculateWinner(boardState);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (boardState[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board boardState={boardState} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
