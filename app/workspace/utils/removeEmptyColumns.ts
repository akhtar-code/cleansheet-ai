export function removeEmptyColumns(data: any[]) {
  if (!data.length) return data;

  const keys = Object.keys(data[0]);

  const keep = keys.filter((key) =>
    data.some(
      (row) =>
        String(row[key] ?? "").trim() !== ""
    )
  );

  return data.map((row) => {
    const obj: any = {};

    keep.forEach((k) => {
      obj[k] = row[k];
    });

    return obj;
  });
}