import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
    return (
        <button
            type='button'
            className='square'
            style={{
                fontWeight: isWinningSquares ? 'bold' : 'normal',
                color: isWinningSquares ? 'green' : 'red'
            }}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square