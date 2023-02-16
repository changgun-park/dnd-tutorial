import Square from "./Square";
import Knight from "./Knight";
import { handleSquareClick } from "./Game";

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  const isKnightHere = knightX === x && knightY === y;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      onClick={() => handleSquareClick(x, y)}
      style={{ width: "12.5%", height: "12.5%" }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({ knightPosition }) {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
}
