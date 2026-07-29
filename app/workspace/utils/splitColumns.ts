export function splitColumn(
  data: any[],
  column: string,
  delimiter: string
) {
  if (!column) return data;

  return data.map((row) => {
    const value = String(row[column] ?? "");

    const parts = value.split(delimiter);

    const newRow = { ...row };

    newRow[column + "_1"] = parts[0] ?? "";
    newRow[column + "_2"] =
      parts.slice(1).join(delimiter);

    return newRow;
  });
}