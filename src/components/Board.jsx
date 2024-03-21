function Board({ board, setBoard, player, setPlayer }) {
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
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={(e) => handleButtonClick(e, "one")}>
                {board.one}
              </button>
            </td>
            <td>
              <button
                className="vert"
                onClick={(e) => handleButtonClick(e, "two")}
              >
                {board.two}
              </button>
            </td>
            <td>
              <button onClick={(e) => handleButtonClick(e, "three")}>
                {board.three}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="hori"
                onClick={(e) => handleButtonClick(e, "four")}
              >
                {board.four}
              </button>
            </td>
            <td>
              <button
                className="vert hori"
                onClick={(e) => handleButtonClick(e, "five")}
              >
                {board.five}
              </button>
            </td>
            <td>
              <button
                className="hori"
                onClick={(e) => handleButtonClick(e, "six")}
              >
                {board.six}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={(e) => handleButtonClick(e, "seven")}>
                {board.seven}
              </button>
            </td>
            <td>
              <button
                className="vert"
                onClick={(e) => handleButtonClick(e, "eight")}
              >
                {board.eight}
              </button>
            </td>
            <td>
              <button onClick={(e) => handleButtonClick(e, "nine")}>
                {board.nine}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Board;
