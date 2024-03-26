import BoardBox from "./BoardBox";

function Board({ board, setBoard, player, setPlayer }) {
  const boxNames = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
  ];
  return (
    <div>
      <table>
        <tbody>
          {boxNames.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((box, index) => {
                  return (
                    <td key={index}>
                      <BoardBox
                        boxName={box}
                        board={board}
                        setBoard={setBoard}
                        player={player}
                        setPlayer={setPlayer}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
