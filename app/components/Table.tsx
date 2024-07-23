import React from "react";

interface AnalysisTableProps {
  result: string;
}

const AnalysisTable: React.FC<AnalysisTableProps> = ({ result }) => {
  const tableContent = result.split("```")[1].replace("plaintext\n", "").trim();
  const lines = tableContent.split("\n");

  const headers = lines[0]
    .split("|")
    .map((header) => header.trim())
    .filter((header) => header);

  const dataRows = lines.slice(2).filter((row) => row.trim() !== "");

  const rows = dataRows.map((row) =>
    row
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell)
  );

  const findLowestPriceIndex = (row: string[], headers: string[]) => {
    const priceIndices = headers.reduce((acc: number[], header, index) => {
      if (header.toLowerCase().includes("precio unitario")) {
        acc.push(index);
      }
      return acc;
    }, []);

    let lowestPrice = Infinity;
    let lowestPriceIndex = -1;

    priceIndices.forEach((index) => {
      const priceString = row[index].replace(/[$*]/g, "");
      const normalizedPrice = priceString.replace(",", ".");
      const price = parseFloat(normalizedPrice);

      console.log(price);

      if (!isNaN(price) && price < lowestPrice) {
        lowestPrice = price;
        lowestPriceIndex = index;
      }
    });

    return lowestPriceIndex;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border border-gray-300 bg-gray-100 text-left text-sm font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const lowestPriceIndex = findLowestPriceIndex(row, headers);
            return (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-2 px-4 border border-gray-300 text-sm ${
                      cellIndex === lowestPriceIndex
                        ? "bg-blue-500 font-bold text-white"
                        : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisTable;
