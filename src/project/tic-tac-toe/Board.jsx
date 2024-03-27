// Board.js
import React from "react";
import BoardBox from "./BoardBox";

function Board({ board, setBoard, player, setPlayer }) {
  // Array representing board positions
  const boxNames = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
  ];

  return (
    <div>
      <table className="ticTacToe__table">
        <tbody>
          {/* Mapping through rows and columns to create board */}
          {boxNames.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((boxName, colIndex) => (
                <td
                  key={colIndex}
                  className={`${
                    rowIndex === 1 ? "ticTacToe__borderHorizontal" : ""
                  } ${colIndex === 1 ? "ticTacToe__borderVertical" : ""}`}
                >
                  {/* Rendering individual BoardBox component */}
                  <BoardBox
                    key={boxName}
                    boxName={boxName}
                    board={board}
                    setBoard={setBoard}
                    player={player}
                    setPlayer={setPlayer}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
