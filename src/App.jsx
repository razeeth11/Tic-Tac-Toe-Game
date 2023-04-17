import { useState } from "react";
import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function App() {
  const { width, height } = useWindowSize();
  const [box, setBox] = useState(Array(9).fill(null));
  const [state, setState] = useState(true);
  function handleClick(index) {
    if (!winner) {
      const boardCopy = [...box];
      if (boardCopy[index] == null) {
        boardCopy[index] = state ? "X" : "O";
        setState(!state);
      }
      setBox(boardCopy);
    }
  }

  const decideWinner = (box) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (box[a] != null && box[a] == box[b] && box[b] == box[c]) {
        console.log("winner", box[a]);
        return box[a];
      }
    }
    return null;
  };

  const winner = decideWinner(box);

  const style = {
    color: winner == "X" ? "rgb(84, 84, 84)" : "#FFFCCA",
  };

  return (
    <div className="App">
      {winner ? <Confetti width={width} height={height}/> :null }
      <h1>Tic Tac Toe</h1>
      <div className="boxes">
        {box.map((box, index) => (
          <Box box={box} key={index} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="result">
        {winner ? null : <h2>{state ? "X" : "O"} - Turns</h2>}
        <h2>
          The Winner is : <span style={style}>{winner}</span>
        </h2>
      </div>
      <div className="but">
        {!winner ? (
          <button
            onClick={() =>
              setBox(Array(9).fill(null))
            }
          >
            Retry
          </button>
        ) : null}
        {winner ? (
          <button
            onClick={() =>
              setBox(Array(9).fill(null))
            }
          >
            {winner ? "Play Again" : "Retry"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function Box({ box, onPlayerClick }) {
  const style = {
    color: box == "X" ? "rgb(84, 84, 84)" : "#FFFCCA",
  };

  return (
    <div style={style} onClick={onPlayerClick} className="box">
      {box}
    </div>
  );
}
