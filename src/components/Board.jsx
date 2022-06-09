import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = (position) => {
    if (board[position]) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {

        if (pos === position) {
          return isXNext ? 'X' : '0';
        }

        return square;
      })
    })

    setIsXNext((prev) => !prev)
  };

  const renderSquare = (pos) => {
    return (
      <Square
        value={board[pos]}
        onClick={() => handleSquareClick(pos)}
      />
    )
  }
  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
