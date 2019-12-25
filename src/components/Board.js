import React, { useState } from 'react';
import { calculateWinner, nextPlayer } from '../utils/index';
import { Square } from './Square';

export function Board () {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);
    
    const player = nextPlayer(isXNext);
    const status = `Next player: ${player}`;
  
    function renderSquare(index) {
      return <Square value={squares[index]} squares={squares} onClick={() => {
        const nextSquares = [...squares];
        if(calculateWinner(squares || squares[index])) {
          alert("you won!")
          return;
        }
        nextSquares[index] = player;
        setXNext(!isXNext)
        setSquares(nextSquares)
       
      }} />
    }
  
    return (
      <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    )
}