import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button
              style={{
                fontWeight: index === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(index);
              }}
            >
              {index === 0 ? 'Go to starting point' : `Go to move #${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
