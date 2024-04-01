import { useState } from "react";

function Square({ value }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <button onClick={handleClick}>{value}</button>
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
  return (
    <>
      <div>
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div>
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div>
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
    </>
  );
}
