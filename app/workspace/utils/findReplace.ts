export function findReplace(
  data: any[],
  findText: string,
  replaceText: string
) {
  if (!findText.trim()) return data;

  return data.map((row) => {
    const newRow: any = {};

    Object.keys(row).forEach((key) => {
      const value = row[key];

      if (typeof value === "string") {
        newRow[key] = value
          .split(findText)
          .join(replaceText);
      } else {
        newRow[key] = value;
      }
    });

    return newRow;
  });
}