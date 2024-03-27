import React, { useState } from "react";
import "./MagicSquare.css"; // Import the CSS file

function MagicSquare() {
  const [size, setSize] = useState(0);
  const [magicSquare, setMagicSquare] = useState([]);

  function handleSizeChange(event) {
    setSize(parseInt(event.target.value));
  }

  function createMagicSquare() {
    if (size > 0) {
      const newMagicSquare = [];
      for (let i = 0; i < size; i++) {
        newMagicSquare.push(new Array(size).fill(0));
      }

      let num = 1;
      let i = parseInt(size / 2);
      let j = size - 1;

      while (num <= size * size) {
        if (i === -1 && j === size) {
          j = size - 2;
          i = 0;
        } else {
          if (j === size) {
            j = 0;
          }
          if (i < 0) {
            i = size - 1;
          }
        }

        if (newMagicSquare[i][j] !== 0) {
          j -= 2;
          i++;
          continue;
        } else {
          newMagicSquare[i][j] = num++;
        }

        j++;
        i--;
      }

      setMagicSquare(newMagicSquare);
    } else {
      alert("Please enter a valid number greater than 0.");
    }
  }

  return (
    <div className="magic-square-container">
      <input
        type="number"
        className="magic-square-input"
        placeholder="Enter a number"
        value={size}
        onChange={handleSizeChange}
      />
      <button className="magic-square-button" onClick={createMagicSquare}>
        Create Magic Square
      </button>
      <table className="magic-square-table">
        <tbody>
          {magicSquare.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MagicSquare;
