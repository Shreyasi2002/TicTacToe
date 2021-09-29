import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.boardState.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'This game is a Tie'}
    </h2>
  );
};

export default StatusMessage;
