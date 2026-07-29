export function mergeColumns(
  data: any[],
  firstColumn: string,
  secondColumn: string,
  separator: string
) {
  if (!firstColumn || !secondColumn)
    return data;

  return data.map((row) => {
    const newRow = { ...row };

    const first =
      String(row[firstColumn] ?? "").trim();

    const second =
      String(row[secondColumn] ?? "").trim();

    newRow[firstColumn] =
      first + separator + second;

    newRow[secondColumn] = "";

    return newRow;
  });
}