export function sortData(
  data: any[],
  column: string,
  direction: "asc" | "desc"
) {
  if (!column) return data;

  const sorted = [...data].sort((a, b) => {
    const valueA = String(a[column] ?? "");
    const valueB = String(b[column] ?? "");

    const result = valueA.localeCompare(
      valueB,
      undefined,
      {
        numeric: true,
      }
    );

    return direction === "asc"
      ? result
      : -result;
  });

  return sorted;
}