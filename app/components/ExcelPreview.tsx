type ExcelPreviewProps = {
  data: any[];
};

export default function ExcelPreview({ data }: ExcelPreviewProps) {
  if (data.length === 0) return null;

  return (
    <div className="mt-10 overflow-x-auto">
      <h3 className="text-2xl font-bold mb-4">
        Excel Preview
      </h3>

      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="border px-4 py-2 bg-gray-100"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row: any, index) => (
            <tr key={index}>
              {Object.values(row).map((value: any, i) => (
                <td
                  key={i}
                  className="border px-4 py-2"
                >
                  {String(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}