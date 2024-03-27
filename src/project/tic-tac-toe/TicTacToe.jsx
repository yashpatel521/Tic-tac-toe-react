// TicTacToe.js
import React, { useState } from "react";
import Board from "./Board";
import "./ticTacToe.css";

function TicTacToe() {
  // Initial state for the Tic Tac Toe game
  const initialBoard = {
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

  // Winning combinations
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

  // State for the board and current player
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState("X");

  // Function to reset the game
  const resetBoard = () => {
    setBoard(initialBoard);
    setPlayer("X");
  };

  // Function to check for a winner
  const checkWinner = () => {
    for (let trio of winnerTrio) {
      const [a, b, c] = trio;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return false;
  };

  // Check if there's a winner
  const winner = checkWinner();

  return (
    <div className="ticTacToe">
      {/* Heading */}
      <h2>
        <u>Tic Tac Toe Game</u>
      </h2>
      {/* Display winner or current player's turn */}
      {winner ? (
        <p>Winner is {winner} !! Please Restart game</p>
      ) : (
        <p>Current Player turn: {player}</p>
      )}
      {/* Board component */}
      <Board
        board={board}
        setBoard={setBoard}
        player={player}
        setPlayer={setPlayer}
      />
      <br />
      {/* Restart button */}
      <button className="ticTacToe__restartButton" onClick={resetBoard}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
