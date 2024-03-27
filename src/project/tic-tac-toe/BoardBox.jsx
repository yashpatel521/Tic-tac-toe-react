// BoardBox.js
import React from "react";

function BoardBox({ boxName, board, setBoard, player, setPlayer }) {
  // Function to handle button click
  const handleButtonClick = () => {
    // If the box is already filled, do nothing
    if (board[boxName] !== "") return;

    // Set value on board (X or O)
    setBoard((prevData) => ({
      ...prevData,
      [boxName]: player,
    }));

    // Change player turns
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  // Rendering individual board box (button)
  return (
    <button
      className="ticTacToe__button"
      onClick={handleButtonClick}
      disabled={board[boxName] !== ""}
    >
      {board[boxName]}
    </button>
  );
}

export default BoardBox;
