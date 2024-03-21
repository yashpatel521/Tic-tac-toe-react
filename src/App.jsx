import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
function App() {
  const initalBoard = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
  };
  const winnerTrio = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
  ];

  const [board, setBoard] = useState(initalBoard);
  const [player, setPlayer] = useState("X");
  const buttons = document.querySelectorAll("table button"); // All buttons in table

  function resetBoard() {
    setBoard(initalBoard);
    setPlayer("X");

    // enable all buttons after reset
    buttons.forEach((eachButton) => {
      eachButton.disabled = false;
    });
  }

  function checkWinner() {
    for (let trio of winnerTrio) {
      const [a, b, c] = trio;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return false;
  }

  //check winner if there is a winner
  const checkWinnerPlayer = checkWinner();
  let txt = "";
  if (checkWinnerPlayer) {
    // add win message to text and disable all buttons
    buttons.forEach((eachButton) => {
      eachButton.disabled = true;
    });
    txt = `Winner is ${checkWinnerPlayer} !! Please Restart game`;
  } else {
    txt = `Current Player turn: ${player}`;
  }

  return (
    <>
      <h2>
        <u>Tic Tac Toe Game</u>
      </h2>
      <p>{txt}</p>
      <Board
        board={board}
        setBoard={setBoard}
        player={player}
        setPlayer={setPlayer}
      />
      <br />
      <button className="vert hori" onClick={resetBoard}>
        Restart Game
      </button>
    </>
  );
}

export default App;
