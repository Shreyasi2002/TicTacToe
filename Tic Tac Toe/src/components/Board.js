import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <div>
      <div>
        <Square value="O" />
        <Square value="X" />
        <Square value="O" />
      </div>
      <div>
        <Square value="X" />
        <Square value="O" />
        <Square value="O" />
      </div>
      <div>
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
    </div>
  );
};

export default Board;
