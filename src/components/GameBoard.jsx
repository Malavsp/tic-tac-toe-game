/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style.css";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

function Restart({ handleRestart }) {
  return (
    <>
      <button onClick={handleRestart} id="restart">
        Restart Game
      </button>
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
    status = (
      <h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          />
        </svg>
        Winner is : {winner}
      </h4>
    );
  } else {
    status = `Next turn is : ${nextIs}`;
  }

  return (
    <div className="gameboard" id="gameboard">
      <div className="status">{status}</div>
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
    </div>
  );
}
