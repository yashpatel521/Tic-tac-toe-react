import React from "react";

function BoardBox({ boxName, board, setBoard, player, setPlayer }) {
  const handleButtonClick = (e, position) => {
    // Set value on board X || O
    setBoard((prevData) => ({
      ...prevData,
      [position]: player, // Example====>> one: X
    }));

    // Disabled button after click once
    e.target.disabled = true;

    // Change player turns
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };
  return (
    <>
      <button
        className="vert hori"
        onClick={(e) => handleButtonClick(e, boxName)}
      >
        {board[boxName]}
      </button>
    </>
  );
}

export default BoardBox;
