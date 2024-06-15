/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  );
}

function Restart({ handleRestart }) {
  return (
    <>
      <button onClick={handleRestart}>Restart Game</button>
    </>
  );
}

export default function GameBoard() {
  const [nextIs, setNextIs] = useState("X");
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        (squares[a] && squares[a]) === squares[b] &&
        squares[b] === (Boolean(squares[c]) && squares[c])
      ) {
        return squares[b];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    nextSquares[i] = nextIs;
    setSquares(nextSquares);
    nextIs === "X" ? setNextIs("O") : setNextIs("X");
  }

  function handleRestart() {
    const sq = [null, null, null, null, null, null, null, null, null];
    setSquares(sq);
  }

  let status;
  const winner = checkWinner(squares);
  if (winner) {
    status = <h4>Winner is : {winner}</h4>;
  } else {
    status = `Next turn is : ${nextIs}`;
  }

  return (
    <>
      <div>{status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <Restart handleRestart={handleRestart} />
    </>
  );
}
