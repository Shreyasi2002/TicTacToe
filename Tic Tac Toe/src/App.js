import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';

import './style/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { boardState: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.boardState);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.boardState[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.boardState.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ boardState: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = index => {
    setCurrentMove(index);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board
        boardState={current.boardState}
        handleSquareClick={handleSquareClick}
      />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
