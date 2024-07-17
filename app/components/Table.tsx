export default function AnalysisTable({ result }: { result: any }) {
  const lines = result.trim().split("\n");
  const headers = lines[0]
    .split("|")
    .map((header: any) => header.trim())
    .filter((header: any) => header);

  const dataRows = lines.slice(1).filter((row: string) => {
    return !row.trim().startsWith("|--") && row.trim() !== "";
  });

  const rows = dataRows.map((row: any) =>
    row
      .split("|")
      .map((cell: any) => cell.trim())
      .filter((cell: any) => cell)
  );

  return (
    <table className="min-w-full bg-white border-collapse border border-gray-300">
      <thead>
        <tr>
          {headers.map((header: any, index: any) => (
            <th
              key={index}
              className="py-2 px-4 border border-gray-300 bg-gray-100"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, rowIndex: any) => (
          <tr key={rowIndex}>
            {headers.map((_: any, cellIndex: any) => (
              <td key={cellIndex} className="py-2 px-4 border border-gray-300">
                {row[cellIndex] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
