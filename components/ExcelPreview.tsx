type ExcelPreviewProps = {
  data: any[];
};

export default function ExcelPreview({
  data,
}: ExcelPreviewProps) {
  if (data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="rounded-3xl bg-white shadow-lg border border-gray-200 overflow-hidden">

      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold">
          Excel Preview
        </h2>

        <p className="text-gray-500 mt-1">
          Live preview of your cleaned spreadsheet
        </p>
      </div>

      <div className="overflow-auto max-h-[700px]">

        <table className="min-w-full border-collapse">

          <thead className="sticky top-0 bg-slate-100 z-10">

            <tr>

              <th className="border border-gray-300 px-4 py-3 text-center w-16">
                #
              </th>

              {columns.map((column) => (
                <th
                  key={column}
                  className="border border-gray-300 px-5 py-3 text-left font-semibold whitespace-nowrap"
                >
                  {column}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white hover:bg-blue-50"
                    : "bg-gray-50 hover:bg-blue-50"
                }
              >

                <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-500">
                  {rowIndex + 1}
                </td>

                {columns.map((column) => (
                  <td
                    key={column}
                    className="border border-gray-200 px-5 py-3 whitespace-nowrap"
                  >
                    {String(row[column] ?? "")}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <div className="border-t bg-gray-50 px-6 py-4 flex justify-between text-sm text-gray-600">

        <span>
          Rows: <strong>{data.length}</strong>
        </span>

        <span>
          Columns: <strong>{columns.length}</strong>
        </span>

      </div>

    </div>
  );
}