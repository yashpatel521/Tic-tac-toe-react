function Table({ magicSquare }) {
  return (
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
  );
}

export default Table;
