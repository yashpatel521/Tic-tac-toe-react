import React, { useState } from "react";
import "./MagicSquare.css"; // Import the CSS file
import Table from "./Table";

function MagicSquare() {
  const [size, setSize] = useState(0);
  const [magicSquare, setMagicSquare] = useState([]);

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
      <p>
        A magic square is a grid of numbers where the sum of each row, column,
        and diagonal is the same. It's a fascinating mathematical construct with
        a rich history and various types, each with its own unique properties
        and symmetries.
      </p>
      <input
        type="number"
        className="magic-square-input"
        placeholder="Enter a number"
        value={size}
        onChange={(e) => setSize(parseInt(event.target.value))}
      />
      <button className="magic-square-button" onClick={createMagicSquare}>
        Create Magic Square
      </button>
      <Table magicSquare={magicSquare} />
    </div>
  );
}

export default MagicSquare;
